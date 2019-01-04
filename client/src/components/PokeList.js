import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon, selectPokemon } from '../actions';

class PokeList extends Component {
    componentDidMount() {
        this.props.fetchPokemon();
    }

    renderList() {
        return this.props.pokemon.map((index) => {
            // console.log(index)
            return (
                < div className="item" key={index.id} onClick={() => this.props.selectPokemon(index)}>
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
    console.log(state)
    return { pokemon: state.pokemon }
}

export default connect(mapStateToProps, { fetchPokemon, selectPokemon })(PokeList);