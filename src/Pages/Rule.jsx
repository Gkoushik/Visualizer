import React, {Component} from "react";
import "../PathfindingVisualizer/Node/Node";

class Rules extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-6">
            <div className={`node node-start `} style={{margin: "7px"}}></div>
          </div>
          <div className="col-xs-6">
            <p style={{padding: "5px"}}>Represents Start Node</p>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6">
            <div className={`node node-wall `} style={{margin: "7px"}}></div>
          </div>
          <div className="col-xs-6">
            <p style={{padding: "5px"}}>Represents wall</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <div className={`node node-finish `} style={{margin: "7px"}}></div>
          </div>
          <div className="col-xs-6">
            <p style={{padding: "5px"}}>Represents Finish Node</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Rules;
