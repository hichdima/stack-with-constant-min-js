# stack-width-constant-min-js
### A stack that can return its MIN element in O(1) time complexity

In this approach we use two stacks:
a) mainStack is our actual stack
b) minStack always has a minimal element on top.

When we push a new element, first, we push it to the mainStack. Second, if the pushed element is lower than minStack top element we push it to minStack, otherwise we clone top element of minStack.
When we pop an element we pop it from both stacks at the same time to keep both stacks synchronized.
This way, we can always has access to min element of mainStack in constant time by popping minStack.

### Example of how to create a stack:

```javascript
let myStack = new minStack;

myStack.push("9");
myStack.push("3");
myStack.push("1");
myStack.push("4");
myStack.push("2");
myStack.push("5");

console.log(myStack.min());
```
