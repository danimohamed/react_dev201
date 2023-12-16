import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./Style.css";

export default class Routing extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Home Page</h1>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the About Page</h1>
      </div>
    );
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Contact Page</h1>
      </div>
    );
  }
}
