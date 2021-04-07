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
