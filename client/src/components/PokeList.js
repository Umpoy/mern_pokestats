import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokeForm from './PokeForm';
import { fetchPokemon, fetchPokemonByType, selectPokemon } from '../actions';

const scroll = {
    height: '100vh',
    overflow: 'auto'
}

class PokeList extends Component {
    constructor(props) {
        super(props);
        this.state = { type: null }
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

    grabTypes = (e) => {
        console.log('Value:', e);
        this.setState({ type: e })
        if (e === 'all') {
            this.props.fetchPokemon();
        } else {
            this.props.fetchPokemonByType(e);
        }
    }

    render() {
        return (
            <div className="ui container grid">
                <PokeForm grabForm={this.grabTypes} />
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