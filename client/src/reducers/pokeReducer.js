export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_POKEMON":
        case "FETCH_POKEMON_BY_TYPE":
            return action.payload;

        // case "FETCH_GRASS":
        // case "FETCH_STEEL":
        // case "FETCH_POISON":
        // case "FETCH_FLYING":
        // case "FETCH_NORMAL":
        // case "FETCH_FIGHTING":
        // case "FETCH_GROUND":
        // case "FETCH_ROCK":
        // case "FETCH_BUG":
        // case "FETCH_GHOST":
        // case "FETCH_PSYCHIC":
        // case "FETCH_FIRE":
        // case "FETCH_WATER":
        // case "FETCH_ELECTRIC":
        // case "FETCH_ICE":
        // case "FETCH_DRAGON":
        // case "FETCH_DARK":
        // case "FETCH_FAIRY":

        default:
            return state;
    }
}