import React from 'react';
import PokeList from './PokeList';
import '../css/main.css';
import '../css/mobile.css'

const App = () => {
    return (
        <div className="app">
            <PokeList />
        </div>
    )
}

export default App;