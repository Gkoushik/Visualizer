export function BFS(grid, startNode, finishNode) {
  var q = new Queue();

  q.enqueue(startNode);

  startNode.distance = 0;
  startNode.isVisited = true;
  startNode.previousNode = null;

  const visitedNodesInOrder = [];

  while (!q.isEmpty()) {
    var p = q.front();

    q.dequeue();

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
        q.enqueue(grid[p.row + x[i][0]][p.col + x[i][1]]);
        grid[p.row + x[i][0]][p.col + x[i][1]].isVisited = true;
        grid[p.row + x[i][0]][p.col + x[i][1]].distance =
          grid[p.row][p.col].distance + 1;

        grid[p.row + x[i][0]][p.col + x[i][1]].previousNode =
          grid[p.row][p.col];

        console.log(grid[p.row + x[i][0]][p.col + x[i][1]]);
        visitedNodesInOrder.push(grid[p.row + x[i][0]][p.col + x[i][1]]);
      }
    }
  }
}

class Queue {
  constructor() {
    let items = [];
    let front = 0;
    let rear = -1;
    let count = 0;

    //Add a new element in queue
    this.enqueue = (elm) => {
      items[++rear] = elm;
      count++;
    };

    //Remove element from the queue
    this.dequeue = () => {
      let current = front++;
      let temp = items[current];
      items[current] = null;
      count--;
      return temp;
    };

    //Return the first element from the queue
    this.front = () => {
      return items[front];
    };

    //Return the last element from the queue
    this.rear = () => {
      return items[rear];
    };

    //Check if queue is empty
    this.isEmpty = () => {
      return count === 0;
    };

    //Return the size of the queue
    this.size = () => {
      return count;
    };

    //Print the queue
    this.print = () => {
      let temp = items.filter((e) => e !== null);
      console.log(temp.toString());
    };
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
