const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT: return state + 1;
        case DECREMENT: return state - 1;
        default: return state;
    }
};

const incAction = () => ({
    type: INCREMENT
});

const decAction = () => ({
    type: DECREMENT
});

const store = Redux.createStore(counterReducer);

// store.dispatch(incAction());
// store.dispatch(incAction());
// store.dispatch(incAction());
// store.dispatch(decAction());
// store.dispatch(incAction());
// store.dispatch(decAction());
// console.log(store.getState());


// link: https://www.freecodecamp.org/learn/front-end-libraries/redux/write-a-counter-with-redux
