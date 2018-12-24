import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions';

class PokeList extends Component {
    componentDidMount() {
        this.props.fetchPokemon();
    }
    render() {
        console.log(this.props.pokemon)
        return (
            <div>Pokémon List</div>
        )
    }
}

const mapStateToProps = state => {
    return { pokemon: state.pokemon }
}

export default connect(mapStateToProps, { fetchPokemon })(PokeList);