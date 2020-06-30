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
    export function BestFS(grid, startNode, finishNode) {
        var q = [];
      
        q.push(startNode);
      
        startNode.distance = 0;
        startNode.isVisited = true;
        startNode.previousNode = null;
      
        const visitedNodesInOrder = [];
      
        while (q.length) {
          var p = q.shift();
      
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
              q.push(grid[p.row + x[i][0]][p.col + x[i][1]]);
      
              grid[p.row + x[i][0]][p.col + x[i][1]].isVisited = true;
              grid[p.row + x[i][0]][p.col + x[i][1]].distance =
                grid[p.row][p.col].distance + 1;
      
              grid[p.row + x[i][0]][p.col + x[i][1]].previousNode =
                grid[p.row][p.col];
      
              console.log(grid[p.row + x[i][0]][p.col + x[i][1]]);
              visitedNodesInOrder.push(grid[p.row + x[i][0]][p.col + x[i][1]]);
            }
          }
          sortNodesByDistance(q);
        }
      }
      
      export function getNodesInShortestPathOrderBFS(finishNode) {
        const nodesInShortestPathOrder = [];
        let currentNode = finishNode;
        while (currentNode !== null) {
          console.log(currentNode);
          nodesInShortestPathOrder.unshift(currentNode);
          var prenode = currentNode.previousNode;
      
          currentNode = currentNode.previousNode;
          console.log(currentNode);
          console.log(prenode);
        }
        return nodesInShortestPathOrder;
      }
      function sortNodesByDistance(unvisitedNodes) {
        unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
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
                <div>
                  Best-First-Search(Grah g, Node start)
                  <p>Create an empty PriorityQueue PriorityQueue pq;</p>
                  <p> Until PriorityQueue is empty</p>
                  <p> u = PriorityQueue.DeleteMin</p>
                  <p></p>
                </div>
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
              algonum: 4,
            },
          }}>
          Visualize BestFS
        </Link>
      </div>
    );
  }
}

export default BFS;
