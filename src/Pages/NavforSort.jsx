import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../main.css";

class NavbarSort extends Component {
  state = {
    path: "./",
  };
  componentDidMount() {
    if (this.props.running) {
      this.setState({path: " "});
    } else {
      this.setState({path: " ./"});
    }
    console.log(this.state.path);
  }

  render() {
    let path = this.state.path;
    return (
      <nav className="navbar  navbar-light default-color lighten-4">
        <span className="navbar-brand mb-0 h1">Visulaizer</span>
      </nav>
    );
  }
}

export default NavbarSort;
