import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions';

class PokeList extends Component {
    componentDidMount() {
        this.props.fetchPokemon();
    }

    renderList() {
        return this.props.pokemon.map(index => {
            return (
                <div className="item" key={index.id}>
                    <img src={index.image}></img>
                </div>
            )
        })
    }

    render() {
        console.log(this.props.pokemon)
        return (
            <div>
                <h1>Pokemon List</h1>
                <div>{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { pokemon: state.pokemon }
}

export default connect(mapStateToProps, { fetchPokemon })(PokeList);