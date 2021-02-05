// requests API data
import Axios from 'axios';

export const fetchAllCharacters = async () => {
    const characters = [];
    let response = await Axios.get('http://swapi.dev/api/people/');
    // NOTE: need to convert response to json?
    console.log(response);
    // adding these characters to the array
    while (response.data.next !== null) {
        // add to array
        for (const character of response.data.results) {
            characters.push(character);
        }

        // make response the next page (since there are multiple pages)
        response = await Axios.get(response.data.next);
    }

    console.log(characters);
    return characters;
}

export const getCharacterByID = async (id) => {
    const response = await Axios.get(`https://swapi.dev/api/people/${id}/`);
    return response.data;
}

export const getHomeWorld = async (url) => {
    const response = await Axios.get(url);
    return response.data.name;
}

export const getFilms = async (films) => {
    let filmNames = [];
    for (const film of films) {
        const response = await Axios.get(film);
        filmNames.push(response.data.title);
    }

    return filmNames;
}