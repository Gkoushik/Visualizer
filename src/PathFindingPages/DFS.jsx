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
    export function DFS(grid, startNode, finishNode) {
        const visitedNodesInOrder = [];
        DFSUtil(grid, startNode, finishNode, visitedNodesInOrder);
        return visitedNodesInOrder;
      }
      
      function DFSUtil(grid, node, finishNode, visitedNodesInOrder) {
        var p = node;
        node.isVisitedNode = true;
        visitedNodesInOrder.push(p);
      
        if (finishNode === node) return 1;
      
        // moving right
        if (
          p.col + 1 < 50 &&
          !grid[p.row][p.col + 1].isVisitedNode &&
          !grid[p.row][p.col + 1].isWall
        ) {
          grid[p.row][p.col + 1].previousNode = grid[p.row][p.col];
          if (DFSUtil(grid, grid[p.row][p.col + 1], finishNode, visitedNodesInOrder))
            return 1;
        }
      
        // moving up
        if (
          p.row - 1 >= 0 &&
          !grid[p.row - 1][p.col].isVisitedNode &&
          !grid[p.row - 1][p.col].isWall
        ) {
          grid[p.row - 1][p.col].previousNode = grid[p.row][p.col];
          if (DFSUtil(grid, grid[p.row - 1][p.col], finishNode, visitedNodesInOrder))
            return 1;
        }
      
        // moving down
        if (
          p.row + 1 < 20 &&
          !grid[p.row + 1][p.col].isVisitedNode &&
          !grid[p.row + 1][p.col].isWall
        ) {
          grid[p.row + 1][p.col].previousNode = grid[p.row][p.col];
          if (DFSUtil(grid, grid[p.row + 1][p.col], finishNode, visitedNodesInOrder))
            return 1;
        }
      
        // moving left
        if (
          p.col - 1 >= 0 &&
          !grid[p.row][p.col - 1].isVisitedNode &&
          !grid[p.row][p.col - 1].isWall
        ) {
          grid[p.row][p.col - 1].previousNode = grid[p.row][p.col];
          if (DFSUtil(grid, grid[p.row][p.col - 1], finishNode, visitedNodesInOrder))
            return 1;
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
                <SyntaxHighlighter language="cpp" style={docco}>
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
                    distance from source cell.
                  </li>
                  <li>Start BFS with source cell.</li>
                  <li>
                    Make a visited array with all having “false” values except
                    ‘0’cells which are assigned “true” values as they can not be
                    traversed.
                  </li>
                  <li>
                    Keep updating distance from source value in each move.
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
              algonum: 2,
            },
          }}>
          Visualize DFS
        </Link>
      </div>
    );
  }
}

export default BFS;
