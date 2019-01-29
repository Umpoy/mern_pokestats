import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokeForm from './PokeForm';
import PokeStats from './PokeStats'
import { fetchPokemon, fetchPokemonByType, selectPokemon } from '../actions';

const topView = {
    height: '40vh'
}

const bottomView = {
    height: '60vh',
    overflowY: 'scroll',
}

const box = {
    cursor: 'pointer'
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
                < div className="column pokemon" key={index.id} onClick={() => this.props.selectPokemon(index)} >
                    <img src={index.image} alt="" style={box} />
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
            <div className="ui container">
                <div className="ui stackable two column grid" >
                    <PokeForm grabForm={this.grabTypes} />
                    <PokeStats />
                </div>
                <div className="ui stackable six column grid" id="pokeList" style={bottomView}>
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