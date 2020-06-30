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
    // C++ program for implementation of Bubble sort 
    #include <bits/stdc++.h> 
    using namespace std; 
    
    void swap(int *xp, int *yp) 
    { 
        int temp = *xp; 
        *xp = *yp; 
        *yp = temp; 
    } 
    
    // A function to implement bubble sort 
    void bubbleSort(int arr[], int n) 
    { 
        int i, j; 
        for (i = 0; i < n-1; i++)	 
        
        // Last i elements are already in place 
        for (j = 0; j < n-i-1; j++) 
            if (arr[j] > arr[j+1]) 
                swap(&arr[j], &arr[j+1]); 
    } 
    
    /* Function to print an array */
    void printArray(int arr[], int size) 
    { 
        int i; 
        for (i = 0; i < size; i++) 
            cout << arr[i] << " "; 
        cout << endl; 
    } 
    
    // Driver code 
    int main() 
    { 
        int arr[] = {64, 34, 25, 12, 22, 11, 90}; 
        int n = sizeof(arr)/sizeof(arr[0]); 
        bubbleSort(arr, n); 
        cout<<"Sorted array: \n"; 
        printArray(arr, n); 
        return 0; 
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
                <p>
                  Bubble Sort is the simplest sorting algorithm that works by
                  repeatedly swapping the adjacent elements if they are in wrong
                  order.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link
          className=" btn btn-primary"
          style={style}
          to={{
            pathname: "./Sorting",
            state: {
              algonum: 3,
            },
          }}>
          Visualize Bubble Sort
        </Link>
      </div>
    );
  }
}

export default BFS;
