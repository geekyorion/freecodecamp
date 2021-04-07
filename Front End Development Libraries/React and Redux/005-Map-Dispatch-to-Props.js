const addMessage = (message) => {
    return {
        type: 'ADD',
        message: message
    }
};

// Change code below this line

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) => dispatch(addMessage(message))
    };
}

// link: https://www.freecodecamp.org/learn/front-end-libraries/react-and-redux/map-dispatch-to-props

