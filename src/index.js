const Node = function(data, nextNode) {
  data = null;
  nextNode = null;

  return { data, nextNode };
}

const LinkedList = function() {
  let head = null;
  let tail = null;
  let size = 0;

  const append = function(value) {
    if (head === null) {
      head = Node(value);
      tail = head;
    } else {
      tail.nextNode = Node(value);
      tail = tail.nextNode;
    }
    size++;
  }

  const prepend = function(value) {
    let newNode = Node(value);
    if (head === null) {
      head = newNode;
      tail = head;
    } else {
      newNode.nextNode = head;
      head = newNode;
    }
    size++;
  }

  const getSize = function() {
    return size;
  }

  const getHead = function() {
    return head;
  }

  const getTail = function() {
    return tail;
  }

  const at = function(index) {
    if (index < 0 || index > size) {
      return null;
    }

    let current = head;

    for (let i = 0; i < size; i++) {
      if (i < index) {
        current = current.nextNode;
      }
    }

    return current;
  }

  const pop = function() {    
    if (size === 1) {
      head = null;
      tail = null;
      size--;
    }

    let current = head;
    for (let i = 0; i < size - 2; i++) {
      current = current.nextNode;
    }

    tail = current;
    tail.nextNode = null;
    size--;
  }

  const contains = function(value) {
    let current = head;
  
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  const find = function(value) {
    let current = head;

    while(current) {
      if(current.value === value) {
        return current;
      }

      current = current.nextNode;
    }

    return null;
  }

  const toString = function() {
    let result = '';
    let current = head;

    while(current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    result += '( null )';

    return result;
  }

  return { append, prepend, getSize, getHead, getTail, at, pop, contains, find, toString };
}

const linkedList = new LinkedList();

linkedList.prepend("test1");
linkedList.append("test2");
linkedList.append("test3");
console.log(linkedList.toString()); // (test1) -> (test2) -> (test3) -> null
// console.log(linkedList.getSize()); // 3
// console.log(linkedList.getHead()); // return head Node
// console.log(linkedList.getTail()); // Node { value: 'test3', nextNodeNode: null }
// console.log(linkedList.at(2)); // Node { value: 'test3', nextNodeNode: null }
// console.log(linkedList.at(4)); // There is no item for this index
// linkedList.pop();
// console.log(linkedList.toString()); // (test1) -> (test2) -> null
// console.log(linkedList.contains("test1")); // true
// console.log(linkedList.find("test2")); // 1
// linkedList.prepend("test3");
// console.log(linkedList.toString()); // (test3) -> (test1) -> (test2) -> null
// console.log(linkedList.toString()); // (test3) -> (test1) -> (test2) -> (test5) -> null