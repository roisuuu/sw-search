// import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter character name in the field provided
        </p>
           
        <div className="searchField">
          
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
      {results && <p>You last searched for: {lastSearched}</p>}
      {/*results && APIData.results.map((item) => (
          <CharInfo key={item.url} data={item} />
      ))*/}
    </div>
  );
}

export default App;
