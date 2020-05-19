const Stack = require('./src/Stack.js');

class minStack {
    constructor() {
        this.mainStack = new Stack()
        this.minStack = new Stack()
    }

    pop() {
        this.minStack.pop() // 7,6,5,2
        return this.mainStack.pop()
    }

    push(value) {
        this.mainStack.push(value)

        if (value > this.minStack.getTop() && this.minStack.isEmpty() == false)
            this.minStack.push(this.minStack.getTop())
        else
            this.minStack.push(value)

    }

    min() {
        return this.minStack.getTop()
    }
}

let myStack = new minStack;

myStack.push("9");
myStack.push("3");
myStack.push("1");
myStack.push("4");
myStack.push("2");
myStack.push("5");

console.log(myStack.min());