import React from "react";
import {getMergeSortAnimations} from "../sortingAlgorithms/sortingAlgorithms.js";
import "./SortingVisualizer.css";
import Navbar from "../Pages//Navbar";
import {quickSort} from "../sortingAlgorithms/Quicksort";
import {InsertionSort} from "../sortingAlgorithms/InsertionSort";
import {BubbleSort} from "../sortingAlgorithms/Bubblesort";
import {Redirect} from "react-router-dom";
import NavbarSort from "../Pages/NavforSort";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 300;

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      running: false,
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 600));
    }
    this.setState({array});
  }

  sort() {
    const {algonum} = this.props.location.state;
    console.log(algonum);
    if (algonum === 0) this.mergeSort();
    else if (algonum === 1) this.quickSort();
    else if (algonum === 2) this.Inserion();
    else this.bubbleSort();
  }

  mergeSort() {
    console.log("doing merge sort");
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const newHeight = animations[i][1];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  Inserion() {
    console.log("doing Isertio sort sort");
    console.log(this.state.array);
    const animations = InsertionSort(this.state.array);
    console.log(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (animations[i][2]) {
        const barOneIdx = animations[i][0];
        const barTwoIdx = animations[i][1];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        let color;

        if (animations[i][2] === 1) color = SECONDARY_COLOR;
        else color = PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const newHeight = animations[i][1];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    console.log("doing Quick sort");
    console.log(this.state.array);
    const animations = quickSort(this.state.array);
    console.log(this.state.array);

    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (!arrayBars) return;
      if (animations[i][2]) {
        const barOneIdx = animations[i][0];
        const barTwoIdx = animations[i][1];

        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        let color;

        if (animations[i][2] === 1) color = SECONDARY_COLOR;
        else color = PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const barTwoIdx = animations[i][1];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const l = barOneStyle.height;
          const r = barTwoStyle.height;
          console.log(l);
          console.log(r);

          barOneStyle.height = `${r}`;
          barTwoStyle.height = `${l}`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort() {
    console.log("doing Bubble sort");
    console.log(this.state.array);
    const animations = BubbleSort(this.state.array);
    console.log(this.state.array);

    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (!arrayBars) return;
      if (animations[i][2]) {
        const barOneIdx = animations[i][0];
        const barTwoIdx = animations[i][1];

        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        let color;

        if (animations[i][2] === 1) color = SECONDARY_COLOR;
        else color = PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const barTwoIdx = animations[i][1];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const l = barOneStyle.height;
          const r = barTwoStyle.height;
          console.log(l);
          console.log(r);

          barOneStyle.height = `${r}`;
          barTwoStyle.height = `${l}`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  render() {
    const {array} = this.state;
    if (!this.props.location.state) {
      return <Redirect to={"/Homepage"} />;
    }
    var style = {
      position: "fixed",
      top: "100px",
      right: "50px",
    };

    var style1 = {
      position: "fixed",
      top: "200px",
      right: "50px",
    };

    return (
      <div className="visualizepage">
        {/* <Navbar running="{this.state.running}" /> */}
        <NavbarSort />
        <div className="array-container visualizecontainer ">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
              }}></div>
          ))}

          <button
            style={style}
            className="btn btn-primary link1 "
            onClick={() => this.resetArray()}>
            Generate New Array
          </button>
          <button
            style={style1}
            className="btn btn-primary link2 "
            onClick={() => this.sort()}>
            Sort
          </button>
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
