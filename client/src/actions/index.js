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

export const fetchGrass = () => async dispatch => {
    const response = await pokeApi.get('/pokemonAPI/grass');

    dispatch({ type: 'FETCH_GRASS', payload: response.data })
}

