import React from 'react';
import PokeList from './PokeList';
import PokeStats from './PokeStats';

const App = () => {
    return (
        <div className="app">
            <PokeStats />
            <PokeList />
        </div>
    )
}

export default App;