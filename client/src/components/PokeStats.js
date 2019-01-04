import React from 'react';
import { connect } from 'react-redux';

const PokeStats = ({ pokemon }) => {
    console.log("pokemon: ", pokemon)
    if (!pokemon) {
        return <h3>Select a Pokemon</h3>
    }
    return (
        < div className="pokemonStats" >
            <h3>Stats for: {pokemon.name}</h3>
        </div >

    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return { pokemon: state.selectedPokemon }
}

export default connect(mapStateToProps)(PokeStats);