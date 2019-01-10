import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon, selectPokemon } from '../actions';

const scroll = {
    height: '100vh',
    overflow: 'auto'
}

class PokeList extends Component {
    componentDidMount() {
        this.props.fetchPokemon();
    }

    renderList() {
        return this.props.pokemon.map((index) => {
            return (
                < div className="item" key={index.id} >
                    <h3 className="pokeName">{index.name.charAt(0).toUpperCase() + index.name.slice(1)}</h3>
                    <button className="ui button primary" onClick={() => this.props.selectPokemon(index)}>
                        {/* {index.name.charAt(0).toUpperCase() + index.name.slice(1)} */}
                        View Stats
                    </button>
                </div >
            )
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <form action="">
                    <select name="types" id="">
                        <option value="all">All</option>
                        <option value="grass">Grass</option>
                        <option value="poison">Poison</option>
                        <option value="flying">Flying</option>
                        <option value="normal">Normal</option>
                        <option value="fighting">Fighting</option>
                        <option value="ground">Ground</option>
                        <option value="rock">Rock</option>
                        <option value="bug">Bug</option>
                        <option value="ghost">Ghost</option>
                        <option value="steel">Steel</option>
                        <option value="fire">Fire</option>
                        <option value="water">Water</option>
                        <option value="electric">Electric</option>
                        <option value="psychic">Psychic</option>
                        <option value="ice">Ice</option>
                        <option value="dragon">Dragon</option>
                        <option value="dark">Dark</option>
                        <option value="fairy">Fairy</option>
                    </select>
                </form>
                <div style={scroll}>
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return { pokemon: state.pokemon }
}

export default connect(mapStateToProps, { fetchPokemon, selectPokemon })(PokeList);