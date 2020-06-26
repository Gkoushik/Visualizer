// Performs Dijkstra's algorithm; returns *all* nodes in the order
// in which they were visited. Also makes nodes point back to their
// previous node, effectively allowing us to compute the shortest path
// by backtracking from the finish node.
export function Astar(grid, startNode, finishNode) {
  openSet = [];
  closedSer = [];
  openSet.push(startNode);
  while (openSet.length) {
    openSet.sort();
    currentNode = openSet.shift();
    closedSet.push(currentNode);

    if (currentNode == endNode) {
      while (currentNode != startNode) {
        path.Add(currentNode);
        currentNode = currentNode.parent;
      }
      return path;
    }
  }
}

// Backtracks from the finishNode to find the shortest path.
// Only works when called *after* the dijkstra method above.
export function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    console.log(currentNode);
    console.log(currentNode.isWall);
    console.log(currentNode.previousNode);

    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
    console.log(currentNode);
  }
  return nodesInShortestPathOrder;
}
