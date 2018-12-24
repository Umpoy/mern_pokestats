import React from 'react';
import PokeList from './PokeList';
import PokeStats from './PokeStats';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <PokeList />
                </div>
                <div className="column eight wide">
                    <PokeStats />
                </div>
            </div>
        </div>
    )
}

export default App;