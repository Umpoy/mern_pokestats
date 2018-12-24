import pokeApi from '../api/pokeAPI';

export const fetchPokemon = () => async dispatch => {
    const response = await pokeApi.get('/pokemonAPI');

    dispatch({ type: 'FETCH_POKEMON', payload: response.data })
}
