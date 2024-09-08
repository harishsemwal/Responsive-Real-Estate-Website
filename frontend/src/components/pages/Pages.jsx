import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Home from "../home/Home";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Login from "./login";
import Signup from "./signup";

const Pages = () => {
  // State to manage user authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false); // Set user as unauthenticated
  };

  return (
    <Router>
      {/* Pass down authentication state and handlers */}
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/contact" component={Contact} />
        {/* Pass setIsAuthenticated to the Login component */}
        <Route exact path="/login">
          <Login setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <Route exact path="/signup" component={Signup} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Pages;
