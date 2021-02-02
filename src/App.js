// import logo from './logo.svg';
import './styles.css';
import React, {useState, useEffect} from 'react';
import { getCharacterID } from './helper';
import { fetchAllCharacters } from './API';

function App() {
  const [name, setName] = useState('');
  const [charList, setCharList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  // async function as this needs to send an API request
  const handleChange = async (event) => {
    setName(event.target.value);
  }

  useEffect(async () => {
    setCharList(await fetchAllCharacters());
  }, []); // note: empty array as second argument so the effect runs only once, avoiding infinite loop

  // the characters that actually correspond to the query
  const matched = charList.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
  return (
    <div className="App">
      <header className="app-header">
        <p>
          Enter character name in the field provided
        </p>
           
        <div className="flex-container" id="searchField">
          <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={handleChange} placeholder='e.g Skywalker' />
            <button type="submit"> Search </button>
          </form>
          
        </div>

        <div className="flex-container" id="charList">
          {charList.length === 0 && 'Loading...'}
          {charList.length > 0 && matched.length === 0 && <div>No matches found with query {name}</div>}
          {charList.length > 0 && name.length === 0 && <div>Please enter a name to begin search</div>}
          {name.length > 0 && matched.map((character, index) => {
            return (
              <div className='flex-container' id='character' key={`swchar-${getCharacterID(character.url)}`}>
                <div>{character.name}</div>
              </div>
            )
          })}

        </div>
        <a
          className="API-link"
          href="https://swapi.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          API Link
        </a>
      </header>
    </div>
  );
}

export default App;
