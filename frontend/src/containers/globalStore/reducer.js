const Reducer = (state, action) => {
    switch (action.type) {
        case 'set':
            print("hello world")
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;