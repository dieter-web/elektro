require('use-strict')

class Stack {
  constructor () {
    this.items = []
  }

  push (element) {
    this.items.push(element)
  }

  pop () {
    if (this.items.length === 0) return 'underflow'
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  printStack() {
    let str = "";
    this.items.map((wert) => {
        str += wert + " ";
    });
    return str;
  }

  clear() {
    this.items = [];
  }
}
exports.Stack = Stack;
