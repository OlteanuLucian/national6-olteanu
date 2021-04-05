console.log("JavaScript - Promises");

// Promises are a way for writing asynchronous  in more organized way
// to emphasize this we will try to code a solution for calling 3 asynchronous functions one after each other
// we will have the classic/callback example then the promise example

// --> Callback Example <--

function firstStep() {
  setTimeout(() => {
    console.log("End of first step -> callback");
    secondStep();
  }, 2000);
}

function secondStep() {
  setTimeout(() => {
    console.log("End of second step -> callback");
    thirdStep();
  }, 1000);
}


function thirdStep() {
  setTimeout(() => {
    console.log("End of third step");
  }, 500);
}

// here is were we start the chain of callbacks
firstStep();


// --> Promise example

// A promise is an objected instantiated with Promise class
// It is cable making chains of asynchronous calls
// A promise has the concepts of resolving and rejecting one
// By resolving a promise you will move forward in the promise chain, thus the function attached by .then method will be called
// By rejecting a promise the promise chain will end and if a function is attached by .catch method the it will be called
// A promise can be resolved only once


// any function that wants to make use of a promise must return a new Promise()
function firstStep(number) {
  console.log("Start promise chain");

  // As argument to the Promise constructor you need to pass a function
  // this function will be called with 2 default arguments --> resolve and reject
  // resolve and reject are functions and can be called
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("End of first step");
      // as we can see we can call resolve in a callback
      // we can pass data to the next function in the promise chain by passing arguments in the resolve function
      resolve(number + 1);
    }, 2000);
  });
}

// To add links in the promise chains every function need to return a promise
// exception from the rule above is the last function in the promise chain
// in our case the param value will be the value passed in the "firstStep" resolve function argument
function secondStep(param) {
  console.log(param);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("End of second step");

      // here we make a decision to resolve or reject a promise based on the "param"
      if (param % 2 === 1) {
        reject("We want even param");
      } else {
        resolve(param / 2);
      }
    }, 1000);
  });
}

// this is the final step in the promise chain and it doesn't need to be a promise
function thirdStep(finalValue) {
  setTimeout(() => {
    console.log("End of third step");
    console.log("Final Value", finalValue);
  }, 500);
}

// Depending on the argument of "firstStep" all the promises will be fulfilled and we will reach the end of the promise chain
// If any the link the in the chain will call reject then we will no reach the end of the promise chain
// If the use catch we will be able to catch the rejection and do some logic upon it 
firstStep(1)
  .then(secondStep)
  .then(thirdStep)
  .catch((error) => {
    alert(`Promise chain has the following error: ${error}`);
  });

// fetch uses promises in its implementation
// we used above 3 steps function because is similar to the number of steps we need to use in a fetch to use the data from server
fetch("https://simple-json-server-scit.herokuapp.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.log(error);
  });
