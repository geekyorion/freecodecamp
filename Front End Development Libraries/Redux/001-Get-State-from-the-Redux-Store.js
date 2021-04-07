const store = Redux.createStore(
    (state = 5) => state
);

// Change code below this line
const currentState = store.getState();

console.log(currentState);

// link: https://www.freecodecamp.org/learn/front-end-libraries/redux/get-state-from-the-redux-store
