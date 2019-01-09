import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon, selectPokemon } from '../actions';

const scroll = {
    // height: '100vh',
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
                        {index.name.charAt(0).toUpperCase() + index.name.slice(1)}
                    </button>
                </div >
            )
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
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