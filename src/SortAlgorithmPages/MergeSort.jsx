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
    /* C program for Merge Sort */
    #include <stdio.h> 
    #include <stdlib.h> 
    
    // Merges two subarrays of arr[]. 
    // First subarray is arr[l..m] 
    // Second subarray is arr[m+1..r] 
    void merge(int arr[], int l, int m, int r) 
    { 
        int i, j, k; 
        int n1 = m - l + 1; 
        int n2 = r - m; 
    
        /* create temp arrays */
        int L[n1], R[n2]; 
    
        /* Copy data to temp arrays L[] and R[] */
        for (i = 0; i < n1; i++) 
            L[i] = arr[l + i]; 
        for (j = 0; j < n2; j++) 
            R[j] = arr[m + 1 + j]; 
    
        /* Merge the temp arrays back into arr[l..r]*/
        i = 0; // Initial index of first subarray 
        j = 0; // Initial index of second subarray 
        k = l; // Initial index of merged subarray 
        while (i < n1 && j < n2) { 
            if (L[i] <= R[j]) { 
                arr[k] = L[i]; 
                i++; 
            } 
            else { 
                arr[k] = R[j]; 
                j++; 
            } 
            k++; 
        } 
    
        /* Copy the remaining elements of L[], if there 
        are any */
        while (i < n1) { 
            arr[k] = L[i]; 
            i++; 
            k++; 
        } 
    
        /* Copy the remaining elements of R[], if there 
        are any */
        while (j < n2) { 
            arr[k] = R[j]; 
            j++; 
            k++; 
        } 
    } 
    
    /* l is for left index and r is right index of the 
    sub-array of arr to be sorted */
    void mergeSort(int arr[], int l, int r) 
    { 
        if (l < r) { 
            // Same as (l+r)/2, but avoids overflow for 
            // large l and h 
            int m = l + (r - l) / 2; 
    
            // Sort first and second halves 
            mergeSort(arr, l, m); 
            mergeSort(arr, m + 1, r); 
    
            merge(arr, l, m, r); 
        } 
    } 
    
    /* UTILITY FUNCTIONS */
    /* Function to print an array */
    void printArray(int A[], int size) 
    { 
        int i; 
        for (i = 0; i < size; i++) 
            printf("%d ", A[i]); 
        printf("\n"); 
    } 
    
    /* Driver program to test above functions */
    int main() 
    { 
        int arr[] = { 12, 11, 13, 5, 6, 7 }; 
        int arr_size = sizeof(arr) / sizeof(arr[0]); 
    
        printf("Given array is \n"); 
        printArray(arr, arr_size); 
    
        mergeSort(arr, 0, arr_size - 1); 
    
        printf("\nSorted array is \n"); 
        printArray(arr, arr_size); 
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
                  Like QuickSort, Merge Sort is a Divide and Conquer algorithm.
                  It divides input array in two halves, calls itself for the two
                  halves and then merges the two sorted halves. The merge()
                  function is used for merging two halves. The merge(arr, l, m,
                  r) is key process that assumes that arr[l..m] and arr[m+1..r]
                  are sorted and merges the two sorted sub-arrays into one. See
                  following C implementation for details.
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
              algonum: 0,
            },
          }}>
          Visualize Merge Sort
        </Link>
      </div>
    );
  }
}

export default BFS;
