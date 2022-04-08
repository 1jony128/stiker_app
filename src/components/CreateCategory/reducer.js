
const reducer = (state, action) => {
    switch (action.type) {
        case "VALUE":
            console.log("VALUE")
            return {
                ...state,
                value: action.payload
            }
        case "BLUR":
            console.log("BLUR")
            return {
                ...state,
                blur: action.payload
            }
        case "ERROR":
            console.log("ERROR")
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};
export default reducer;