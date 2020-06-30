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
    int ShortestPath(char grid[N][M]) 
{ 
    QItem source(0, 0, 0); 
  
    // To keep track of visited QItems. Marking 
    // blocked cells as visited. 
    bool visited[N][M]; 
    for (int i = 0; i < N; i++) { 
        for (int j = 0; j < M; j++) 
        { 
            if (grid[i][j] == '0') 
                visited[i][j] = true; 
            else
                visited[i][j] = false; 
  
            // Finding source 
            if (grid[i][j] == 's') 
            { 
               source.row = i; 
               source.col = j; 
            } 
        } 
    } 
  
    // applying BFS on matrix cells starting from source 
    queue<QItem> q; 
    q.push(source); 
    visited[source.row][source.col] = true; 
    while (!q.empty()) { 
        QItem p = q.front(); 
        q.pop(); 
  
        // Destination found; 
        if (grid[p.row][p.col] == 'd') 
            return p.dist; 
  
        // moving up 
        if (p.row - 1 >= 0 && 
            visited[p.row - 1][p.col] == false) { 
            q.push(QItem(p.row - 1, p.col, p.dist + 1)); 
            visited[p.row - 1][p.col] = true; 
        } 
  
        // moving down 
        if (p.row + 1 < N && 
            visited[p.row + 1][p.col] == false) { 
            q.push(QItem(p.row + 1, p.col, p.dist + 1)); 
            visited[p.row + 1][p.col] = true; 
        } 
  
        // moving left 
        if (p.col - 1 >= 0 && 
            visited[p.row][p.col - 1] == false) { 
            q.push(QItem(p.row, p.col - 1, p.dist + 1)); 
            visited[p.row][p.col - 1] = true; 
        } 
  
         // moving right 
        if (p.col + 1 < M && 
            visited[p.row][p.col + 1] == false) { 
            q.push(QItem(p.row, p.col + 1, p.dist + 1)); 
            visited[p.row][p.col + 1] = true; 
        } 
    } 
    return -1; 
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
              algonum: 0,
            },
          }}>
          Visualize Dijktra
        </Link>
      </div>
    );
  }
}

export default BFS;
