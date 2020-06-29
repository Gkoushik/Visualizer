import React from "react";
import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";
import Code from "./Pages/Code";
import Homepage from "./Pages/Homepage";
import {Route} from "react-router-dom";
import {HashRouter as Router} from "react-router-dom";
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";
function App() {
  return (
    <Router basename="/">
      <Route path="/" exact component={Homepage} />
      <Route path="/PathfindingVisualizer" component={PathfindingVisualizer} />
      <Route path="/Code" component={Code} />
      <Route path="/Homepage" component={Homepage} />
      <Route path="/Sorting" component={SortingVisualizer} />
    </Router>
    // <SortingVisualizer></SortingVisualizer>
  );
}

export default App;
