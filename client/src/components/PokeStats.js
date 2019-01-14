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
            <div class="ui grid">
                <div class="eight wide column">
                    <img src={pokemon.image} alt={pokemon.name} style={image}></img>
                </div>
                <div class="eight wide column">      <ul>
                    <li className="hp">HP: {data[0]}</li>
                    <li className="attack">Attack: {data[1]}</li>
                    <li className="defense">Defense: {data[2]}</li>
                    <li className="sAttack">Special Attack: {data[3]}</li>
                    <li className="sDefense">Special Defense: {data[4]}</li>
                    <li className="speed">Speed: {data[5]}</li>
                </ul></div>

            </div>
        </div>

    );
}

const mapStateToProps = (state) => {
    return { pokemon: state.selectedPokemon }
}

export default connect(mapStateToProps)(PokeStats);