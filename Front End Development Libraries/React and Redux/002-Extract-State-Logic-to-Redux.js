// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

const addMessage = (message) => ({
    type: ADD,
    message
});

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD: return [...state, action.message];
        default: return state;
    }
}

const store = Redux.createStore(messageReducer);

// link: https://www.freecodecamp.org/learn/front-end-libraries/react-and-redux/extract-state-logic-to-redux

