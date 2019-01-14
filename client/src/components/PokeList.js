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
                <PokeForm />
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