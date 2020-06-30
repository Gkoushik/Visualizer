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
    export function Astar(grid, startNode, finishNode) {
        const visitedNodesInOrder = [];
      
        const openSet = [];
        const closedSet = [];
        openSet.push(startNode);
      
        startNode.distance = 0;
        while (openSet.length) {
          sortNodesByDistance(openSet); //sort with distance
          const currentNode = openSet.shift();
          closedSet.push(currentNode);
          currentNode.isVisitedNode = true;
      
          visitedNodesInOrder.push(currentNode);
      
          // finally find the goal, trace path with parent
          if (currentNode === finishNode) {
            return visitedNodesInOrder;
          }
      
          const Neighbours = getNeighbors(currentNode, grid);
      
          for (var i = 0; i < Neighbours.length; i++) {
            let neighbour = Neighbours[i];
      
            if (neighbour.isWall || closedSet.includes(neighbour)) {
              continue;
            }
      
            let cost =
              currentNode.distance + heuristic_cost_estimate(currentNode, neighbour);
            console.log(cost);
            console.log(neighbour.distance);
      
            if (cost < neighbour.distance || !openSet.includes(neighbour)) {
              neighbour.distance = cost;
              neighbour.hdistance = heuristic_cost_estimate(neighbour, finishNode);
              neighbour.previousNode = currentNode;
      
              if (!openSet.includes(neighbour)) {
                openSet.push(neighbour);
                console.log(neighbour);
              }
            }
          }
        }
      }
      
      function sortNodesByDistance(unvisitedNodes) {
        unvisitedNodes.sort(
          (nodeA, nodeB) =>
            nodeA.distance + nodeA.hdistance - (nodeB.distance + nodeB.hdistance)
        );
      }
      
      function getNeighbors(node, grid) {
        const neighbors = [];
        const {col, row} = node;
        if (row > 0) neighbors.push(grid[row - 1][col]);
        if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
        if (col > 0) neighbors.push(grid[row][col - 1]);
        if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
        return neighbors;
      }
      
      function heuristic_cost_estimate(nodeA, nodeB) {
        const deltaX = Math.abs(nodeA.row - nodeB.row);
        const deltaY = Math.abs(nodeA.col - nodeB.col);
      
        return deltaX + deltaY;
      }
      
      // Backtracks from the finishNode to find the shortest path.
      // Only works when called *after* the dijkstra method above.
      export function getNodesInShortestPathOrder(finishNode) {
        const nodesInShortestPathOrder = [];
        let currentNode = finishNode;
        while (currentNode !== null) {
          console.log(currentNode);
          console.log(currentNode.isWall);
          console.log(currentNode.previousNode);
      
          nodesInShortestPathOrder.unshift(currentNode);
          currentNode = currentNode.previousNode;
          console.log(currentNode);
        }
        return nodesInShortestPathOrder;
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
                <div>
                  <h6>What is A* Search Algorithm? </h6>
                  <div>
                    A* Search algorithm is one of the best and popular technique
                    used in path-finding and graph traversals.{" "}
                  </div>
                  <h6>Why A* Search Algorithm ?</h6>
                  <div>
                    Informally speaking, A* Search algorithms, unlike other
                    traversal techniques, it has “brains”. What it means is that
                    it is really a smart algorithm which separates it from the
                    other conventional algorithms. This fact is cleared in
                    detail in below sections. And it is also worth mentioning
                    that many games and web-based maps use this algorithm to
                    find the shortest path very efficiently (approximation).
                  </div>
                </div>
                2a9d8f
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
              algonum: 3,
            },
          }}>
          Visualize Astar
        </Link>
      </div>
    );
  }
}

export default BFS;
