export function BestFS(grid, startNode, finishNode) {
  var q = [];

  q.push(startNode);

  startNode.distance = 0;
  startNode.isVisited = true;
  startNode.previousNode = null;

  const visitedNodesInOrder = [];

  while (q.length) {
    var p = q.shift();

    // Destination found;
    if (grid[p.row][p.col].isFinish) return visitedNodesInOrder;

    var x = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ];

    for (var i = 0; i < x.length; i++) {
      if (
        p.row + x[i][0] >= 0 &&
        p.row + x[i][0] < 20 &&
        p.col + x[i][1] >= 0 &&
        p.col + x[i][1] < 50 &&
        !grid[p.row + x[i][0]][p.col + x[i][1]].isVisited &&
        !grid[p.row + x[i][0]][p.col + x[i][1]].isWall
      ) {
        q.push(grid[p.row + x[i][0]][p.col + x[i][1]]);

        grid[p.row + x[i][0]][p.col + x[i][1]].isVisited = true;
        grid[p.row + x[i][0]][p.col + x[i][1]].distance =
          grid[p.row][p.col].distance + 1;

        grid[p.row + x[i][0]][p.col + x[i][1]].previousNode =
          grid[p.row][p.col];

        console.log(grid[p.row + x[i][0]][p.col + x[i][1]]);
        visitedNodesInOrder.push(grid[p.row + x[i][0]][p.col + x[i][1]]);
      }
    }
    sortNodesByDistance(q);
  }
}

export function getNodesInShortestPathOrderBFS(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    console.log(currentNode);
    nodesInShortestPathOrder.unshift(currentNode);
    var prenode = currentNode.previousNode;

    currentNode = currentNode.previousNode;
    console.log(currentNode);
    console.log(prenode);
  }
  return nodesInShortestPathOrder;
}
function sortNodesByDistance(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}
