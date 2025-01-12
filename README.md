# React Native Asynchronous Data Handling Error

This repository demonstrates a common error in React Native applications when dealing with asynchronous data fetching and accessing properties of potentially null or undefined objects.

The `bug.js` file shows the problematic code where an attempt to access a property of a potentially null object results in a `TypeError: Cannot read properties of null (reading 'name')` error.

The `bugSolution.js` file provides a solution using optional chaining and nullish coalescing to safely handle the situation.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the app (using a suitable React Native development environment).
4. Observe the error in the initial render or try to simulate the error using network throttling to slow down the api call