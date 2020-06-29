import React, {Component} from "react";
class BFS extends Component {
  state = {};
  render() {
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
            </code>
          </pre>
        </div>

        <Link
          className="container"
          to={{
            pathname: "./Visulaize",
            state: {
              algonum: 0,
            },
          }}>
          BFS
        </Link>
      </div>
    );
  }
}

export default BFS;
