import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const image = {
    height: '150px'
}

const PokeStats = ({ pokemon }) => {

    if (!pokemon) {
        return <h3>Select a Pokemon</h3>
    }
    if (typeof pokemon.stats === "string") {
        pokemon.stats = JSON.parse(pokemon.stats);
        pokemon.type = JSON.parse(pokemon.type);
    }
    const types = Object.values(pokemon.type);
    console.log(types);
    const data = [pokemon.stats.hp, pokemon.stats.attack, pokemon.stats.defense, pokemon.stats.sAttack, pokemon.stats.sDefense, pokemon.stats.speed];


    return (
        <div className="pokemonStats column">
            <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} #{pokemon.id}</h3>
            <img src={pokemon.image} alt={pokemon.name} style={image}></img>
            <Sparklines data={data}>
                <SparklinesLine color="blue" />
            </Sparklines>
        </div>

    );
}

const mapStateToProps = (state) => {
    return { pokemon: state.selectedPokemon }
}

export default connect(mapStateToProps)(PokeStats);