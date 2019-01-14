import React from 'react';
import PokeList from './PokeList';
import PokeStats from './PokeStats';

const App = () => {
    return (
        <div className="ui container grid">
            <PokeStats />
            <PokeList />

        </div>
    )
}

export default App;