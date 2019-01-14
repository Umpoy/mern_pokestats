import React, { Component } from 'react';

class PokeForm extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }

        this.onFormChange = this.onFormChange.bind(this);
    }

    onFormChange(event) {
        console.log(event.target.value)
        this.setState({ term: event.target.value }, () => {
            this.props.grabForm(this.state.term);
        })
    }

    render() {
        return (
            <div className="column">
                <h1>PokeStats</h1>
                <form action="get">
                    Filter Pokemon by Types &nbsp;
                    <select name="types" defaultValue="all" id="" onChange={this.onFormChange}>
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
                <h3>PokeFact</h3>
            </div>
        )
    }
}

export default PokeForm;