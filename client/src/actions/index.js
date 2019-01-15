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