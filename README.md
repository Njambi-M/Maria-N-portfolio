This is my portfolio built using react. Find the project available at: https://njambi-m.github.io/Maria-N-portfolio/ 

##Questions
### 1. What is NPM?
NPM, which stands for Node Packet Manager, is a packet manager for Node.js JavaScript environment with features such as maintaining dependencies.

### 2. What is SPA?
SPA, which stands for Single Page Application, is a single webpage presented in its own time and dynamically rewrites the current page, rather than loading entire new pages from the server.

### 3. What is the event loop?
The event loop is a part of JavaScript's runtime environment that enables asynchronous execution of code.

### 4. What is the difference between export x and export default x? How do you import them differently?
export x is for exporting a named export which in our case is x while export default x is used to export a default export. The default export can only be 1 in a file but there can be multiple named exports. The named export can be imported by: import {x} from './example'; while the default export is imported by: import myValue from './example'; Named exports are imported using their exact names while default exports can use different names.

### 5. Why do you use className as a property in React and not class?
This is because class is a reserved JavaScript keyword and could cause conflicts if used. 

### 6. Why should you not write the following? What will happen?: <button onClick={setCounter(counter + 1)}> +1 </button>
This is discouraged as it will cause an infinite loop and possibly a crash. This is because the component will be re-rendered with a new value for the counter as soon as the previous render finishes thus causing an endless cycle of rendering and state changes since it is synchronous.

### 7. What is object deconstruction and how is it connected to React components (example)?
Object deconstruction is a feature that allows the extraction of properties or elements from objects or arrays into distinct variables during declaration. In React, it is used when declaring props to create local variables representing those prop values directly. For example: 
import React from 'react';

const MyComponent = (props) => {
  // Using object destructuring to extract values from props
  const { name, age, gender } = props;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};

// Usage of the component
const App = () => {
  const user = {
    name: 'John Doe',
    age: 25,
    gender: 'Male',
  };

  return <MyComponent {...user} />;
};

export default App;

is deconstructed by:
// Using object destructuring in function parameters
const MyComponent = ({ name, age, gender }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};


### 8. How can HTML and JavaScript be used in the same function (like in a React Component)? What makes it possible under the hood?
This is possible due to JSX that allows embedding HTML-like templates inside JavaScript code. JSX transforms HTML-like tags and expressions into standard JavaScript objects before runtime.

### 9. What is async/await? Bring an example
It is a JavaScript feature that handles asynchronous operations. For example:
async function sayHelloWithDelay() {
  const sleepTimeMs = 2000;
  await new Promise((resolve) => setTimeout(resolve, sleepTimeMs));
  console.log("Hello!");
}
sayHelloWithDelay();

In this code async/await is used in managing a timed delay where a Promise wraps a timeout of the given duration and JavaScript will pause the current function execution until the promise settles

### 10. What is a Promise? Bring an example
A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. We can use the previous code as an example:
async function sayHelloWithDelay() {
  const sleepTimeMs = 2000;
  await new Promise((resolve) => setTimeout(resolve, sleepTimeMs));
  console.log("Hello!");
}
sayHelloWithDelay();

The Promise is created, and the setTimeout function is used to introduce a delay. The resolve function is then passed as the callback to setTimeout, indicating that the promise should be resolved after the specified delay.









