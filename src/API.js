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