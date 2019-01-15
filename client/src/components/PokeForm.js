import React, { Component } from 'react';

const overflow = {
    overflow: 'auto',
    height: '100%'
}

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

    renderPokemonFact() {
        const facts = [{ title: 'That Rocks!', description: "Although it's impossible for a Pokemon to have more than two types, if there were a Pokemon that was a combination of all 18 possible types, you'd probably think it'd be invincible, right? Well, it would actually still have one weakness. Rock type attacks would be super effective on this impossible Pokemon." }, { title: 'Mrs. Mime', description: '"Mr. Mime" the pokemon can in fact be a girl, however the name of the pokemon doesn\'t actually change. She would still be a Mr. Mime. I guess that makes sense, or else you\'d think they would all be married!' }, { title: 'Pokemon Is English', description: 'The name Pokemon isn\'t Japanese at all! It\'s really just a combination of "pocket" and "monster."' }, { title: 'Doduo Can Fly!', description: 'In Pokemon stadium, it was revealed how Doduo can learn the move \'fly\'. Apparently it just runs really fast and the running motion gives it the power of flight! It just floats there, running in place...' }, { title: 'Count On It', description: 'Many Pokemon names include numbers, The original legendary trio of Articuno, Zapdos, and Moltres include the Spanish words for one, two, and three (uno, dos, tres). Deino and his evolutions include the German words for one, two, and three (ein, zwei, drei).' }, { title: 'Original Legendary', description: 'Originally, Arcanine was intended to be a legendary Pokemon. The game team replaced Arcanine with Moltres before releasing the game, and make the fire dog a standard Pokemon. They must\'ve regretted the idea of not including a fire dog legendary because they introduced Entei in the next generation.' }, { title: 'A Very Early Mention', description: 'Although Munna wasn\'t introduced until generation 5, it is actually referenced in the very first game! A woman standing outside of Rock Tunnel in Pokemon Red and Blue dreams about a chunky pink Pokemon with a floral pattern. Clearly the game makers had Munna in mind even way back then.' }, { title: 'Modified Pokemon?', description: 'Genesect is a very futuristic Pokemon, and Kabutops is an ancient fossil. However, there are rumors that Genesect is actually a Kabutops that\'s been modified. Although the two don\'t share any of the same types and use barely any of the same attacks, there is a definite resemblence, especially when you compare Genesect\'s head to Kabuto.' }, { title: 'Gender Bender', description: 'Azurill is the only Pokemon that can change it\'s gender when evolving. When evolving into Marill, Azurill has a 1 in 4 chance of switching genders. Fans have debated whether this is because some amphibians are able to change gender, or that it may have embryonic qualities that mean it hasn\'t fully formed into a gender yet.' }, { title: 'A Failed Attempt?', description: 'There are rumors that the transforming Pokemon Ditto was a failed attempt to create Mew. Both Pokemon are pink, weigh 8.8 lbs, know Transform naturally, and can learn every possible move. And since we know that scientists were indeed trying to create a copy of Mew (aka how Mewtwo was made), this doesn\'t seem like a bizarre notion at all.' }, { title: 'Special Snowflake Spinda', description: 'Spinda isn\'t an often-used Pokemon, but it has a pretty interesting trait. No two Spinda\'s are the same, and to ensure that, the game developers created over 4 billion unique spot patterns for Spinda to have.' }, { title: 'Anatomically Correct', description: 'The swirl on Poliwag\'s stomach may just seem like a fun design, but it\'s actually based on real life. Real tadpoles actually have swirled intestines, and Poliwag\'s swirl mimics them.' }, { title: 'Polar Opposites', description: 'In the anime, it\'s clear that Pikachu and Meowth are on completely opposite sides. This is intentional, and is based on the animals that they were created to look like: a mouse and a cat. Another hint at this is that their Pokedex numbers (25 and 52) are exact opposites.' }, { title: 'Shadow Of A Doubt', description: 'Speaking of opposites, there\'s another Pokemon duo that is thought by many to be exact opposites. Gengar is the shadow Pokemon, and many believe that he earned that name because he\'s actually Clefable\'s shaow come to life. The two Pokemon look very similar, and their (original) Ghost/Normal typings ensure that neither can ever touch eachother, much like a person and his shadow.' }, { title: 'Famous Pikachu', description: 'Pokemon Yellow gave players the opportunity to play the game in a similar style to how the anime unfolded, which involved starting with a special Pikachu that followed you around. If the Pikachu from Pokemon Yellow is uploaded to Pokemon Stadium, then it becomes even more like the anime. The uploaded Pikachu is voiced by Ash\'s Pikachu\'s atual voice actor Ikue Ohtani and has unique sound effects.' }, { title: 'Celebrity Pokemon', description: 'There are two Pokemon in the game that are actually based on real Hollywood celebrities. The punching Pokemon Hitmonchan is based on Jackie Chan, and the kicking Pokemon Hitmonlee is based on Bruce Lee.' }, { title: 'Do It For The Vine', description: 'Tangela is just a clump of vines. That\'s why gamers were shocked that it couldn\'t learn the move Vine Whip until generation 2!' }, { title: 'Make A Splash', description: 'Splash is widely known as the most useless move in the entire game. Made famous by Magikarp, the move expanded to be known by numerous Pokemon including Hoppip, Spoink, and Buneary. Gamers were confused about why non-Water types would know the move, and why the move was typed as Normal. The answer comes from the fact that in Japan it\'s called "Hop," and that\'s how it\'s really meant to be interpreted' },]
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        return (
            <div style={overflow}>
                <h4>{randomFact.title}</h4>
                <p>{randomFact.description}</p>
            </div>
        )

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
                {this.renderPokemonFact()}
            </div>
        )
    }
}

export default PokeForm;