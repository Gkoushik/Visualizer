import React, {Component} from "react";
import {BFS} from "../Codes/code.json";
import {Link, Route} from "react-router-dom";
import Navbar from "./Navbar";

class Code extends Component {
  state = {};
  render() {
    const {algo} = this.props.location.state;

    return (
      <div>
        <Navbar />
        <div class="container">
          <pre class="pre-scrollable">
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
            pathname: "/PathfindingVisualizer",
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
