const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt"); // Include bcrypt for hashing passwords

const app = express();
app.use(cors());
app.use(express.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "uphelderharish",
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.message);
    return;
  }
  console.log("Connected to MySQL database.");
});

// Route for signup
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";
  const values = [name, email, hashedPassword];

  // Log the received values
  console.log("Received signup data:", values);

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error inserting data into database:", err.message);
      return res.status(500).json({ message: "Error inserting data." });
    }
    return res.json({ message: "Signup successful", data });
  });
});

// Route for login
app.post(
  "/login",
  [
    check("email", "Invalid email format").isEmail().isLength({ min: 10, max: 30 }),
    check("password", "Password length must be 8-10 characters").isLength({ min: 8, max: 10 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const sql = "SELECT * FROM login WHERE email = ?";

    db.query(sql, [email], async (err, data) => {
      if (err) {
        console.error("Error querying database:", err.message);
        return res.status(500).json({ message: "Error querying database." });
      }
      if (data.length > 0) {
        // Compare the hashed password
        const isPasswordValid = await bcrypt.compare(password, data[0].password);
        if (isPasswordValid) {
          return res.json({ message: "Login successful" });
        } else {
          return res.status(401).json({ message: "Invalid password" });
        }
      } else {
        return res.status(404).json({ message: "No record existed" });
      }
    });
  }
);

// Start the server
app.listen(8081, () => {
  console.log("Server is listening on port 8081");
});
