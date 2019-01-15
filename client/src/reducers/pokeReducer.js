export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_POKEMON":
        case "FETCH_POKEMON_BY_TYPE":
            return action.payload;
        default:
            return state;
    }
}