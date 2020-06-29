import React, {Component} from "react";
import Node from "./Node/Node";
import {dijkstra, getNodesInShortestPathOrder} from "../algorithms/dijkstra";
import {BFS} from "../algorithms/BFS";
import {DFS} from "../algorithms/DFS";
import {Astar} from "../algorithms/Astar";
import {BestFS} from "../algorithms/BestFS";
import {Redirect} from "react-router-dom";

import Navbar from "../Pages//Navbar";
import Rules from "../Pages/Rule";

import "./PathfindingVisualizer.css";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;
const NO_ROWS = 20;
const NO_COLS = 50;

export default class PathfindingVisualizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false,
      isRunning: false,
      algo: [],
    };
  }

  componentDidMount() {
    const grid = getInitialGrid(NO_ROWS, NO_COLS);
    this.setState({grid});
    this.state.algo.push(dijkstra);
    this.state.algo.push(BFS);
    this.state.algo.push(DFS);
    this.state.algo.push(Astar);
    this.state.algo.push(BestFS);

    // const {algo} = this.props.location.state;
    // console.log(algo);
  }

  handleMouseDown(row, col) {
    if (!this.state.isRunning) {
      const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
      this.setState({grid: newGrid, mouseIsPressed: true});
    }
  }

  handleMouseEnter(row, col) {
    if (!this.state.isRunning) {
      if (!this.state.mouseIsPressed) return;
      const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
      this.setState({grid: newGrid});
    }
  }

  handleMouseUp() {
    if (!this.state.isRunning) {
      this.setState({mouseIsPressed: false});
    }
  }

  animate(visitedNodesInOrder, nodesInShortestPathOrder) {
    if (visitedNodesInOrder.length === null) return;
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 5 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        const newGrid = getVisitedGrid(this.state.grid, node.row, node.col);
        this.setState({grid: newGrid});
      }, 5 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        const newGrid = getShortestpathgrid(
          this.state.grid,
          node.row,
          node.col
        );
        this.setState({grid: newGrid});
      }, 50 * i);
    }
  }

  visualize() {
    if (!this.state.isRunning) {
      const {algonum} = this.props.location.state;
      console.log(algonum);
      const {grid} = this.state;
      this.setState({isRunning: true});
      const startNode = grid[START_NODE_ROW][START_NODE_COL];
      const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
      const visitedNodesInOrder = this.state.algo[algonum](
        grid,
        startNode,
        finishNode
      );
      const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);

      this.animate(visitedNodesInOrder, nodesInShortestPathOrder);
    }
  }

  reset() {
    const initgridd = getInitialGrid(NO_ROWS, NO_COLS);
    this.setState({grid: initgridd});
    this.setState({mouseIsPressed: false});
    this.setState({isRunning: false});
  }

  render() {
    const grid = this.state.grid;
    const mouseIsPressed = this.state.mouseIsPressed;

    if (!this.props.location.state) {
      return <Redirect to={"/Homepage"} />;
    }

    return (
      <div>
        <Navbar />
        <Rules />
        <div className="h-100 row align-items-center">
          <div className="grid ">
            {grid.map((row, rowIdx) => {
              return (
                <div key={rowIdx}>
                  {row.map((node, nodeIdx) => {
                    const {
                      row,
                      col,
                      isFinish,
                      isStart,
                      isWall,
                      isVisitednode,
                      isShortestPath,
                    } = node;
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={isWall}
                        mouseIsPressed={mouseIsPressed}
                        isVisitednode={isVisitednode}
                        isShortestPath={isShortestPath}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp()}
                        row={row}></Node>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <button onClick={() => this.visualize()} className="b">
          Visualize
        </button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}

const getInitialGrid = (x, y) => {
  const grid = [];

  for (let row = 0; row < x; row++) {
    const currentRow = [];
    for (let col = 0; col < y; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    hdistance: Infinity,
    isVisitednode: false,
    isShortestPath: false,
    isWall: false,
    previousNode: null,
  };
};

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

const getVisitedGrid = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isVisitednode: true,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

const getShortestpathgrid = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isShortestPath: true,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
