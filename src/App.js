import React, {Component} from "react";
import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";
import Homepage from "./Pages/Homepage";
import {Route} from "react-router-dom";
import {HashRouter as Router} from "react-router-dom";
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";
import BFS from "./PathFindingPages/BFS";
import DFS from "./PathFindingPages/DFS";
import Astar from "./PathFindingPages/Astar";
import BestFS from "./PathFindingPages/BestFS";
import Dijkstra from "./PathFindingPages/Dijkstra";
import BubbleSort from "./SortAlgorithmPages/BubbleSort";
import QuickSort from "./SortAlgorithmPages/QuickSort";
import MergeSort from "./SortAlgorithmPages/MergeSort";
import InsertionSort from "./SortAlgorithmPages/InsertionSort";

class App extends Component {
  state = {};

  render() {
    return (
      <Router basename="/">
        <Route path="/" exact component={Homepage} />
        <Route
          path="/PathfindingVisualizer"
          component={PathfindingVisualizer}
        />
        <Route path="/Homepage" component={Homepage} />
        <Route path="/Sorting" component={SortingVisualizer} />
        <Route path="/BFS" component={BFS} />
        <Route path="/DFS" component={DFS} />
        <Route path="/BestFS" component={BestFS} />
        <Route path="/Astar" component={Astar} />
        <Route path="/Dijkstra" component={Dijkstra} />
        <Route path="/MergeSort" component={MergeSort} />
        <Route path="/QuickSort" component={QuickSort} />
        <Route path="/BubbleSort" component={BubbleSort} />
        <Route path="/InsertionSort" component={InsertionSort} />
      </Router>
      // <SortingVisualizer></SortingVisualizer>
    );
  }
}

export default App;
