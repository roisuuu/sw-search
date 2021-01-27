// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    
    // simulating an API call
    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter character name in the field provided
        </p>
        <div className="searchField">
          {submitting &&
          <div>Submitting Form...</div>
          } {/* we use the AND operator to have this only when submitting is true */}
          
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label>
                <p>Name</p>
                <input name="character" />
              </label>
            </fieldset>
            <button type="submit">Search</button>
          </form>
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
