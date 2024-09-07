import React, { useState } from "react";
import { Link } from "react-router-dom";
import validation from "./loginValidation"; // Import the validation function

const fullPageStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "pink",
};

const cardStyle = {
  maxWidth: "400px",
  width: "100%",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
};

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);
  };

  return (
    <div style={fullPageStyle}>
      <div className="card" style={cardStyle}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={values.email}
              onChange={handleInput}
              placeholder="Enter Email"
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={values.password}
              onChange={handleInput}
              placeholder="Enter Password"
            />
            {errors.password && <div className="text-danger">{errors.password}</div>}
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Login
          </button>
          <p className="text-center mb-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary">
              Create Account
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
