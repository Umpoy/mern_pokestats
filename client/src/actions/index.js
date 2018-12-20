import pokeApi from '../api/pokeAPI';

export const fetchPokemon = async () => {
    const promise = pokeApi.get('/pokemonAPI');

    return {
        type: 'FETCH_POKEMON',
        payload: promise
    }
}