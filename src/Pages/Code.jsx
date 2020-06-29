import React, {Component} from "react";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import {Redirect} from "react-router-dom";

class Code extends Component {
  state = {};
  render() {
    if (!this.props.location.state) {
      return <Redirect to={"/Homepage"} />;
    }
    const {algo} = this.props.location.state;
    console.log(algo);

    return (
      <div>
        <Navbar />
        <div className="container">
          <pre className="pre-scrollable">
            <code>
              <h1>Title One</h1>
              <p>A line of sample text</p>
              <p>Another line of sample text</p>
              <p>Yet another line of sample text</p>

              <p>A line of sample text</p>
              <p>Another line of sample text</p>
              <p>Yet another line of sample text</p>

              <p>A line of sample text</p>
              <p>Another line of sample text</p>
              <p>Yet another line of sample text</p>

              <p>A line of sample text</p>
              <p>Another line of sample text</p>
              <p>Yet another line of sample text</p>
            </code>
          </pre>
        </div>

        <Link
          className="container"
          to={{
            pathname: algo[2],
            state: {
              algonum: algo[1],
            },
          }}>
          {algo[0]}
        </Link>
      </div>
    );
  }
}

export default Code;
