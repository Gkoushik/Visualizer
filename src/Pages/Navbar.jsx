import React, {Component} from "react";
import {Link} from "react-router-dom";
import Rules from "./Rule";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">Visulaizer</span>

        <Link
          className="container"
          to={{
            pathname: "/",
          }}>
          Home
        </Link>
      </nav>
    );
  }
}

export default Navbar;
