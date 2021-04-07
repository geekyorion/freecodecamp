const store = Redux.createStore(
    (state = { login: false }) => state
);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};

// Dispatch the action here:
store.dispatch(loginAction());

// link: https://www.freecodecamp.org/learn/front-end-libraries/redux/dispatch-an-action-event
