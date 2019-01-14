import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import '../css/PokeStats.css';

const image = {
    height: '150px'
}

const red = {
    backgroundColor: 'rgba(255, 89, 89, 0.5)'
}

const orange = {
    backgroundColor: '#F5AC78'
}

const yellow = {
    backgroundColor: '#FAE078'
}

const blue = {
    backgroundColor: '#9DB7F5'
}

const green = {
    backgroundColor: '#A7DB8D'
}

const pink = {
    backgroundColor: '#FA92B2'
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
    const hp = {
        width: (data[0] / 255) * 100 + '%',
        backgroundColor: '#FF0000'
    }
    const attack = {
        width: (data[1] / 255) * 100 + '%',
        backgroundColor: '#F08030'
    }
    const defense = {
        width: (data[2] / 255) * 100 + '%',
        backgroundColor: '#F9D030'
    }
    const sAttack = {
        width: (data[3] / 255) * 100 + '%',
        backgroundColor: '#6890F0'
    }
    const sDefense = {
        width: (data[4] / 255) * 100 + '%',
        backgroundColor: '#78C850'
    }
    const speed = {
        width: (data[5] / 255) * 100 + '%',
        backgroundColor: '#F85888'
    }

    return (
        <div className="pokemonStats column">
            <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} #{pokemon.id}</h3>
            <div class="ui grid stackable">
                <div class="four wide column">
                    <img src={pokemon.image} alt={pokemon.name} style={image}></img>
                </div>
                <div class="twelve wide column">
                    <ul>
                        <li className="hp">
                            HP: {data[0]}
                            <div className="bar" style={red}>
                                <div className="stats" style={hp}></div>
                            </div>
                        </li>
                        <li className="attack">
                            Attack: {data[1]}
                            <div className="bar" style={orange}>
                                <div className="stats" style={attack}></div>
                            </div></li>
                        <li className="defense">
                            Defense: {data[2]}
                            <div className="bar" style={yellow}>
                                <div className="stats" style={defense}></div>
                            </div></li>
                        <li className="sAttack">
                            Special Attack: {data[3]}
                            <div className="bar" style={blue}>
                                <div className="stats" style={sAttack}></div>
                            </div></li>
                        <li className="sDefense">
                            Special Defense: {data[4]}
                            <div className="bar" style={green}>
                                <div className="stats" style={sDefense}></div>
                            </div></li>
                        <li className="speed">
                            Speed: {data[5]}
                            <div className="bar" style={pink}>
                                <div className="stats" style={speed}></div>
                            </div></li>
                    </ul>
                </div>

            </div>
        </div >

    );
}

const mapStateToProps = (state) => {
    return { pokemon: state.selectedPokemon }
}

export default connect(mapStateToProps)(PokeStats);