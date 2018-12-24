export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_POKEMON":
            return action.payload;
        case "SELECT_POKEMON":
            return action.payload;
        default:
            return state;
    }
}