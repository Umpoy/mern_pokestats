export default (state = [], action) => {
    console.log('action.type: ', action)
    switch (action.type) {
        case "FETCH_POKEMON":
            return action.payload;
        default:
            return state;
    }
}