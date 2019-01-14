import pokeApi from '../api/pokeAPI';

export const fetchPokemon = () => async dispatch => {
    const response = await pokeApi.get('/pokemonAPI');

    dispatch({ type: 'FETCH_POKEMON', payload: response.data })
}

export const selectPokemon = (pokemon) => {
    return {
        type: 'POKEMON_SELECTED',
        payload: pokemon
    }
}

export const fetchPokemonByType = (type) => async dispatch => {
    const response = await pokeApi.get(`/pokemonAPI/${type}`);

    dispatch({ type: 'FETCH_POKEMON_BY_TYPE', payload: response.data })
}

// export const fetchGrass = () => async dispatch => {
//     const response = await pokeApi.get('/pokemonAPI/grass');

//     dispatch({ type: 'FETCH_GRASS', payload: response.data })
// }
// export const fetchSteel = () => async dispatch => {
//     const response = await pokeApi.get('/pokemonAPI/steel');

//     dispatch({ type: 'FETCH_STEEL', payload: response.data })
// }
// export const fetchPoison = () => async dispatch => {
//     const response = await pokeApi.get('/pokemonAPI/poison');

//     dispatch({ type: 'FETCH_POISON', payload: response.data })
// }
// export const fetchFlying = () => async dispatch => {
//     const response = await pokeApi.get('/pokemonAPI/flying');

//     dispatch({ type: 'FETCH_FLYING', payload: response.data })
// }
// export const fetchNormal = () => async dispatch => {
//     const response = await pokeApi.get('/pokemonAPI/normal');

//     dispatch({ type: 'FETCH_NORMAL', payload: response.data })
// }
// export const fetchFighting = () => async dispatch => {
//     const response = await pokeApi.get('/pokemonAPI/fighting');

//     dispatch({ type: 'FETCH_FIGHTING', payload: response.data })
// }
// export const fetchGround = () => async dispatch => {
//     const response = await pokeApi.get('/pokemonAPI/ground');

//     dispatch({ type: 'FETCH_GROUND', payload: response.data })
// }
// export const fetchRock = () => async dispatch => {
//     const response = await pokeApi.get('/pokemonAPI/rock');

//     dispatch({ type: 'FETCH_ROCK', payload: response.data })
// }
// export const fetchBug = () => async dispatch => {
//     const response = await pokeApi.get('/pokemonAPI/bug');

//     dispatch({ type: 'FETCH_BUG', payload: response.data })
// }
// export const fetchGhost = () => async dispatch => {
//     const response = await pokeApi.get('/pokemonAPI/ghost');

//     dispatch({ type: 'FETCH_GHOST', payload: response.data })
// }
// export const fetchWater = () => async dispatch => {
//     const response = await pokeApi.get('/pokemonAPI/water');

//     dispatch({ type: 'FETCH_WATER', payload: response.data })
// }
// export const fetchFire = () => async dispatch => {
//     const response = await pokeApi.get('/pokemonAPI/fire');

//     dispatch({ type: 'FETCH_FIRE', payload: response.data })
// }
// export const fetchElectric = () => async dispatch => {
//     const response = await pokeApi.get('/pokemonAPI/electric');

//     dispatch({ type: 'FETCH_ELECTRIC', payload: response.data })
// }
// export const fetchPsychic = () => async dispatch => {
//     const response = await pokeApi.get('/pokemonAPI/pyschic');

//     dispatch({ type: 'FETCH_PYSCHIC', payload: response.data })
// }
// export const fetchIce = () => async dispatch => {
//     const response = await pokeApi.get('/pokemonAPI/ice');

//     dispatch({ type: 'FETCH_ICE', payload: response.data })
// }
// export const fetchDragon = () => async dispatch => {
//     const response = await pokeApi.get('/pokemonAPI/dragon');

//     dispatch({ type: 'FETCH_dragon', payload: response.data })
// }
// export const fetchDark = () => async dispatch => {
//     const response = await pokeApi.get('/pokemonAPI/dark');

//     dispatch({ type: 'FETCH_DARK', payload: response.data })
// }
// export const fetchFairy = () => async dispatch => {
//     const response = await pokeApi.get('/pokemonAPI/fairy');

//     dispatch({ type: 'FETCH_FAIRY', payload: response.data })
// }


