import React from 'react';
import PokeList from './PokeList';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <PokeList />
                </div>
                <div className="column eight wide">
                    <PokeDetail />
                </div>
            </div>
        </div>
    )
}

export default App;