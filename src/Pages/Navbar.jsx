import React, {Component} from "react";
import {Link} from "react-router-dom";

class Navbar extends Component {
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
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Visulaizer</span>
        <Link
          className="container"
          to={{
            pathname: "./",
          }}>
          Home
        </Link>
        ;
      </nav>
    );
  }
}

export default Navbar;
