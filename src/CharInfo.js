import './App.css';
import React from "react";
import { useState, useEffect } from 'react';
import { getFilms, getHomeWorld, getCharacterByID } from './API';

/*
    Planning on passing in:
        - Whole character array
        - Specific character id, depending on what is clicked!
        - Component will re-render if the character id changes...
*/
function CharInfo(props) {
    const [id, setID] = useState(props.charID);
    const [character, setCharacter] = useState(null);
    const charArray = props.data;
    console.log(charArray);

    useEffect(async () => {
        const newCharacter = charArray[id];
        newCharacter.homeworld = await getHomeWorld(newCharacter.homeworld);
        newCharacter.films = await getFilms(newCharacter.films);
        setCharacter(newCharacter);
    }, [])

    return (
        <div className="InfoBox">
            <p>
                Name: {character.name}
            </p>
            
        </div>
    );
}

export default CharInfo;