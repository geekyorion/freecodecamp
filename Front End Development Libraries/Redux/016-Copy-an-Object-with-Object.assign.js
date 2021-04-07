const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ONLINE':
            // Don't mutate state here or the tests will fail
            // return { ...state, status: 'online' };
            return Object.assign({}, state, { status: 'online' });
        default:
            return state;
    }
};

const wakeUp = () => {
    return {
        type: 'ONLINE'
    }
};

const store = Redux.createStore(immutableReducer);

// link: https://www.freecodecamp.org/learn/front-end-libraries/redux/copy-an-object-with-object-assign
