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
    // C++ program for insertion sort 
    #include <bits/stdc++.h> 
    using namespace std; 
    
    /* Function to sort an array using insertion sort*/
    void insertionSort(int arr[], int n) 
    { 
        int i, key, j; 
        for (i = 1; i < n; i++) 
        { 
            key = arr[i]; 
            j = i - 1; 
    
            /* Move elements of arr[0..i-1], that are 
            greater than key, to one position ahead 
            of their current position */
            while (j >= 0 && arr[j] > key) 
            { 
                arr[j + 1] = arr[j]; 
                j = j - 1; 
            } 
            arr[j + 1] = key; 
        } 
    } 
    
    // A utility function to print an array of size n 
    void printArray(int arr[], int n) 
    { 
        int i; 
        for (i = 0; i < n; i++) 
            cout << arr[i] << " "; 
        cout << endl; 
    } 
    
    /* Driver code */
    int main() 
    { 
        int arr[] = { 12, 11, 13, 5, 6 }; 
        int n = sizeof(arr) / sizeof(arr[0]); 
    
        insertionSort(arr, n); 
        printArray(arr, n); 
    
        return 0; 
    } 
    
    // This is code is contributed by rathbhupendra 
    
    
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
              algonum: 2,
            },
          }}>
          Visualize Insertion Sort
        </Link>
      </div>
    );
  }
}

export default BFS;
