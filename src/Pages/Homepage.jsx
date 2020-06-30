import React, {Component} from "react";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import "../main.css";

class Homepage extends Component {
  state = {};

  render() {
    return (
      <div className="mainhome">
        <Navbar />

        <div className="row">
          <div className="col">
            <div className="card pathcard shadow p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text text-center font-weight-bold">
                  Path finding algorithms
                </p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    {" "}
                    <Link
                      className=" link"
                      to={{
                        pathname: "/BFS",
                      }}>
                      BFS
                    </Link>
                  </li>
                  <li class="list-group-item">
                    <Link
                      className="link"
                      to={{
                        pathname: "/BestFS",
                      }}>
                      BestFS
                    </Link>
                  </li>
                  <li class="list-group-item">
                    {" "}
                    <Link
                      className=" link"
                      to={{
                        pathname: "/Astar",
                      }}>
                      Astar
                    </Link>
                  </li>
                  <li class="list-group-item">
                    <Link
                      className=" link"
                      to={{
                        pathname: "/Dijkstra",
                      }}>
                      Dijkstra
                    </Link>
                  </li>
                  <li class="list-group-item">
                    <Link
                      className=" link"
                      to={{
                        pathname: "/DFS",
                      }}>
                      DFS
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card  sortingcard shadow p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text text-center font-weight-bold">
                  Sorting algorithms
                </p>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <Link
                      className=" link"
                      to={{
                        pathname: "/MergeSort",
                      }}>
                      MergeSort
                    </Link>
                  </li>
                  <li class="list-group-item">
                    <Link
                      className=" link"
                      to={{
                        pathname: "/BubbleSort",
                      }}>
                      BubbleSort
                    </Link>
                  </li>
                  <li class="list-group-item">
                    <Link
                      className=" link"
                      to={{
                        pathname: "./QuickSort",
                      }}>
                      QuickSort
                    </Link>
                  </li>
                  <li class="list-group-item">
                    {" "}
                    <Link
                      className=" link"
                      to={{
                        pathname: "./InsertionSort",
                      }}>
                      InsertionSort
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
