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
                < div className="item" key={index.id}>
                    <h3 className="pokeName">{index.name.charAt(0).toUpperCase() + index.name.slice(1)}</h3>
                    <img src={index.image} alt={index.name}></img>
                </div >
            )
        })
    }

    render() {
        return (
            <div>
                <div>{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { pokemon: state.pokemon }
}

export default connect(mapStateToProps, { fetchPokemon })(PokeList);