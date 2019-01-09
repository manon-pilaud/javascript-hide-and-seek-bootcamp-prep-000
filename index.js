function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}


function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankedList.length; i++){
    rankedList[i].innerHTML = parseInt((i + n))
  }
}

function deepestChild() {
  let firstNode = document.getElementById('grand-node');
  let nextNode = firstNode.children[0];

  while (nextNode) {
    firstNode = nextNode;
    nextNode = firstNode.children[0];
  }

  return firstNode;
}
