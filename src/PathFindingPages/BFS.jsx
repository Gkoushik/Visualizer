import React, {Component} from "react";
import {Link} from "react-router-dom";
import Navbar from "../Pages/Navbar";
import "../main.css";
import {Redirect} from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import {docco} from "react-syntax-highlighter/dist/esm/styles/hljs";

class BFS extends Component {
  state = {};

  render() {
    const codeString = `
    export function BFS(grid, startNode, finishNode) {
        var q = new Queue();
      
        q.enqueue(startNode);
      
        startNode.distance = 0;
        startNode.isVisited = true;
        startNode.previousNode = null;
      
        const visitedNodesInOrder = [];
      
        while (!q.isEmpty()) {
          var p = q.front();
      
          q.dequeue();
      
          // Destination found;
          if (grid[p.row][p.col].isFinish) return visitedNodesInOrder;
      
          var x = [
            [-1, 0],
            [1, 0],
            [0, 1],
            [0, -1],
          ];
      
          for (var i = 0; i < x.length; i++) {
            if (
              p.row + x[i][0] >= 0 &&
              p.row + x[i][0] < 20 &&
              p.col + x[i][1] >= 0 &&
              p.col + x[i][1] < 50 &&
              !grid[p.row + x[i][0]][p.col + x[i][1]].isVisited &&
              !grid[p.row + x[i][0]][p.col + x[i][1]].isWall
            ) {
              q.enqueue(grid[p.row + x[i][0]][p.col + x[i][1]]);
              grid[p.row + x[i][0]][p.col + x[i][1]].isVisited = true;
              grid[p.row + x[i][0]][p.col + x[i][1]].distance =
                grid[p.row][p.col].distance + 1;
      
              grid[p.row + x[i][0]][p.col + x[i][1]].previousNode =
                grid[p.row][p.col];
      
              console.log(grid[p.row + x[i][0]][p.col + x[i][1]]);
              visitedNodesInOrder.push(grid[p.row + x[i][0]][p.col + x[i][1]]);
            }
          }
        }
      }
`;
    var style = {
      position: "fixed",
      top: "100px",
      right: "50px",
    };

    return (
      <div>
        <Navbar />
        <div className="">
          <div className="row">
            <div className="col-5 float-left">
              <div className="CodeBLock">
                <p className="text-center font-weight-bold">Code</p>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {codeString}
                </SyntaxHighlighter>
              </div>
            </div>

            <div className="col-5 ">
              <div className="Explanation">
                <p className="text-center font-weight-bold">Explanation</p>
                <ol>
                  <li>
                    Store each cell as a node with their row, column values and
                    distance from source cell and previou n
                  </li>
                  <li>Start BFS with source cell.</li>
                  <li>
                    Mark the source node as visted and make distance equal to 0
                  </li>
                  <li>
                    Keep updating distance from source value in each move. and
                    Store previous node
                  </li>
                  <li>
                    Return distance when destination is met, else return -1 (no
                    path exists in between source and destination).
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <Link
          className=" btn btn-primary"
          style={style}
          to={{
            pathname: "./PathfindingVisualizer",
            state: {
              algonum: 1,
            },
          }}>
          Visualize BFS
        </Link>
      </div>
    );
  }
}

export default BFS;
