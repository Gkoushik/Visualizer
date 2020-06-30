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
    /* C++ implementation of QuickSort */
    #include <bits/stdc++.h> 
    using namespace std; 
    
    // A utility function to swap two elements 
    void swap(int* a, int* b) 
    { 
        int t = *a; 
        *a = *b; 
        *b = t; 
    } 
    
    /* This function takes last element as pivot, places 
    the pivot element at its correct position in sorted 
    array, and places all smaller (smaller than pivot) 
    to left of pivot and all greater elements to right 
    of pivot */
    int partition (int arr[], int low, int high) 
    { 
        int pivot = arr[high]; // pivot 
        int i = (low - 1); // Index of smaller element 
    
        for (int j = low; j <= high - 1; j++) 
        { 
            // If current element is smaller than the pivot 
            if (arr[j] < pivot) 
            { 
                i++; // increment index of smaller element 
                swap(&arr[i], &arr[j]); 
            } 
        } 
        swap(&arr[i + 1], &arr[high]); 
        return (i + 1); 
    } 
    
    /* The main function that implements QuickSort 
    arr[] --> Array to be sorted, 
    low --> Starting index, 
    high --> Ending index */
    void quickSort(int arr[], int low, int high) 
    { 
        if (low < high) 
        { 
            /* pi is partitioning index, arr[p] is now 
            at right place */
            int pi = partition(arr, low, high); 
    
            // Separately sort elements before 
            // partition and after partition 
            quickSort(arr, low, pi - 1); 
            quickSort(arr, pi + 1, high); 
        } 
    } 
    
    /* Function to print an array */
    void printArray(int arr[], int size) 
    { 
        int i; 
        for (i = 0; i < size; i++) 
            cout << arr[i] << " "; 
        cout << endl; 
    } 
    
    // Driver Code 
    int main() 
    { 
        int arr[] = {10, 7, 8, 9, 1, 5}; 
        int n = sizeof(arr) / sizeof(arr[0]); 
        quickSort(arr, 0, n - 1); 
        cout << "Sorted array: \n"; 
        printArray(arr, n); 
        return 0; 
    } 
    
    // This code is contributed by rathbhupendra 
    
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
                  Like Merge Sort, QuickSort is a Divide and Conquer algorithm.
                  It picks an element as pivot and partitions the given array
                  around the picked pivot. There are many different versions of
                  quickSort that pick pivot in different ways.We use last
                  element as pivot
                </p>
                <p>
                  The key process in quickSort is partition(). Target of
                  partitions is, given an array and an element x of array as
                  pivot, put x at its correct position in sorted array and put
                  all smaller elements (smaller than x) before x, and put all
                  greater elements (greater than x) after x. All this should be
                  done in linear time.
                </p>
                <h6>Partition Algorithm </h6>
                <p>
                  There can be many ways to do partition, following pseudo code
                  adopts the method given in CLRS book. The logic is simple, we
                  start from the leftmost element and keep track of index of
                  smaller (or equal to) elements as i. While traversing, if we
                  find a smaller element, we swap current element with arr[i].
                  Otherwise we ignore current element.
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
              algonum: 1,
            },
          }}>
          Visualize Quick Sort
        </Link>
      </div>
    );
  }
}

export default BFS;
