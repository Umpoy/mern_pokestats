import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesBars } from 'react-sparklines';

const PokeStats = ({ pokemon }) => {
    const pokemonObj = JSON.parse(JSON.stringify(pokemon))
    console.log("pokemon: ", pokemonObj)
    if (!pokemon) {
        return <h3>Select a Pokemon</h3>
    }
    pokemon.stats = JSON.parse(pokemon.stats);
    const data = [pokemon.stats.hp, pokemon.stats.attack, pokemon.stats.defense, pokemon.stats.sAttack, pokemon.stats.sDefense, pokemon.stats.speed];
    return (
        < div className="pokemonStats" >
            <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
            <img src={pokemon.image} alt={pokemon.name}></img>
            <Sparklines height={20} data={data}>
                <SparklinesBars height={20} />
            </Sparklines>
        </div >

    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return { pokemon: state.selectedPokemon }
}

export default connect(mapStateToProps)(PokeStats);