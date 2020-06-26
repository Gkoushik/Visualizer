import React, {Component} from "react";
// import {Link} from "react-router";
import {Link, Route} from "react-router-dom";
import Code from "./Code";

import "./Content.css";

class Content extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">List of Sorting algorithms</p>

          <ol className="container-fluid  ">
            {this.props.refs.map((tag) => (
              <Link
                className="btn btn-primary link"
                to={{
                  pathname: "/Code",
                  state: {
                    algo: tag,
                  },
                }}>
                {tag[0]}
              </Link>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Content;
