import React, {Component} from "react";
import Content from "./Content";
import Navbar from "./Navbar";

class Homepage extends Component {
  state = {
    tags: [
      ["BFS", "1"],
      ["Dijkstra", "0"],
      ["DFS", "2"],
    ],
    // tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div>
        <Navbar />
        {/* / <Content title={"Sorting Path Finding"} refs={this.state.tags} /> */}
        <Content title={"Path Finding"} refs={this.state.tags} />
        {/* <Content title={"Graph"} refs={this.state.tags} /> */}
      </div>
    );
  }
}

export default Homepage;
