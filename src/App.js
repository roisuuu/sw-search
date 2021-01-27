// import logo from './logo.svg';
import './App.css';
import { useState, useReducer } from 'react';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    // simulating an API call
    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter character name in the field provided
        </p>
           
        <div className="searchField">
          {submitting &&
          <div>Submitting Form...
            <div>
              <p>
                You submitted:
              </p>
              <ul>
                {Object.entries(formData).map(([name, value]) => (
                  <li key={name}><strong>{name}</strong> : {value.toString()}</li>
                ))}
              </ul>
            </div>        
          </div>
          } 
          {/* we use the AND operator to have this only when submitting is true */}

          <form onSubmit={handleSubmit}>
            <fieldset>
              <label>
                <p>Name</p>
                <input name="name" onChange={handleChange}/>
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
