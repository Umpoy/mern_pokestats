import { combineReducers } from 'redux';
import pokeReducer from './pokeReducer';

const selectedPokemonReducer = (selectedPokemon = null, action) => {
    if (action.type === "SELECT_POKEMON") {
        console.log('action: ', action.payload)
        return action.payload
    }
    return selectedPokemon
}

export default combineReducers({
    pokemon: pokeReducer,
    selectedPokemon: selectedPokemonReducer
});