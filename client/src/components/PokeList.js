import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon, fetchPokemonByType, selectPokemon } from '../actions';

const scroll = {
    height: '100vh',
    overflow: 'auto'
}

class PokeList extends Component {
    constructor(props) {
        super(props);
        this.state = { type: null }

        this.grabTypes = this.grabTypes.bind(this);
    }

    componentDidMount() {
        this.props.fetchPokemon();
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log(this.props)
    }

    renderList() {
        return this.props.pokemon.map((index) => {
            return (
                < div key={index.id} >
                    <h3 className="pokeName">{index.name.charAt(0).toUpperCase() + index.name.slice(1)}</h3>
                    <button className="ui button primary" onClick={() => this.props.selectPokemon(index)}>
                        {/* {index.name.charAt(0).toUpperCase() + index.name.slice(1)} */}
                        View Stats
                    </button>
                </div >
            )
        })
    }

    grabTypes(e) {
        // console.log('Value:', e.target.value);
        // this.setState({ type: e.target.value })
        if (e.target.value === 'all') {
            this.props.fetchPokemon();
        } else {
            this.props.fetchPokemonByType(e.target.value);
        }
    }

    render() {
        return (
            <div>
                <form action="get">
                    <select name="types" defaultValue="all" id="" onChange={this.grabTypes}>
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
                <div className="ui stackable three column grid">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { pokemon: state.pokemon }
}

export default connect(mapStateToProps, { fetchPokemon, fetchPokemonByType, selectPokemon })(PokeList);