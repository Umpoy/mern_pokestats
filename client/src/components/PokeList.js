import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions';

class PokeList extends Component {
    componentDidMount() {
        this.props.fetchPokemon();
    }
    render() {
        return (
            <div>Pokémon List</div>
        )
    }
}

export default connect(null, { fetchPokemon })(PokeList);