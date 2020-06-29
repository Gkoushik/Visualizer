import React, {Component} from "react";
import Content from "./Content";
import Navbar from "./Navbar";

class Homepage extends Component {
  state = {
    tags: [
      ["BFS", "1", "/PathfindingVisualizer"],
      ["Dijkstra", "0", "/PathfindingVisualizer"],
      ["DFS (It doesn't garentee shortest path", "2", "/PathfindingVisualizer"],
      ["Astar", "3", "/PathfindingVisualizer"],
      ["BestFS", "4", "/PathfindingVisualizer"],
    ],

    sortingalgos: [
      ["Merge", "0", "/Sorting"],
      ["QuickSort", "1", "/Sorting"],
      ["InsertionSort", "2", "/Sorting"],
      ["BubbleSort", "3", "/Sorting"],
    ],
  };

  render() {
    return (
      <div>
        <Navbar />
        <Content
          title={"Sorting Path Finding"}
          refs={this.state.sortingalgos}
          key={"Sorting Path Finding"}
        />
        <Content
          title={"Path Finding"}
          refs={this.state.tags}
          key={"Path Finding"}
        />
        {/* <Content title={"Graph"} refs={this.state.tags} /> */}
      </div>
    );
  }
}

export default Homepage;
