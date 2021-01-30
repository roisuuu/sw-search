// import logo from './logo.svg';
// import './App.css';
import { useState, useReducer } from 'react';

import CharInfo from './CharInfo';

const formReducer = (state, event) => {
  // return {
  //   ...state,
  //   [event.name]: event.value
  // }

  if (event.reset) {
    return {
      name: '',
    }
  } else {
    return {
      ...state,
      [event.name]: event.value
    }
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {
    // setting a default value for the input
    // name: "Luke Skywalker", 
  });
  const [submitting, setSubmitting] = useState(false);
  const [results, setResults] = useState(false);
  const [lastSearched, setLastSearched] = useState("");
  let APIData = [];

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    // simulating an API call
    // setTimeout(() => {
    //   setSubmitting(false);
    //   setFormData({
    //     reset: true
    //   })
    //   console.log(formData);
    //   // feed formData into API call function

    // }, 3000)

    findCharacter(formData.name);
  }

  // this function does the API call
  const findCharacter = (name) => {
    setSubmitting(false);
    setFormData({
        reset: true
    });

    fetch(`https://swapi.dev/api/people/?search=${name}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            APIData = data; 
            setResults(true);
            setLastSearched(name);
            console.log(APIData.results);
        })

        // TODO: set results to false in the case of an error
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
            <fieldset disabled={submitting}>
              <label>
                <p>Name</p>
                <input name="name" onChange={handleChange} value={formData.name || ''} placeholder={"e.g. Luke Skywalker"}/>
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
      {results && <p>You last searched for: {lastSearched}</p>}
      {/*results && APIData.results.map((item) => (
          <CharInfo key={item.url} data={item} />
      ))*/}
    </div>
  );
}

export default App;
