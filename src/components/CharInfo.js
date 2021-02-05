import './styles.css';
import React from "react";
import { useState, useEffect } from 'react';
import { getFilms, getHomeWorld, getCharacterByID } from './API';
import {useParams, useHistory, Link} from 'react-router-dom';

function CharInfo(props) {
    const {id} = useParams()
    const [character, setCharacter] = useState(null)
    // const history = useHistory()

    useEffect(async () => {
        const newCharacter = await getCharacterByID(id)
        newCharacter.homeworld = await getHomeWorld(newCharacter.homeworld)
        newCharacter.films = await getFilms(newCharacter.films)
        setCharacter(newCharacter)
    }, [])


    console.log(character)
    console.log(id)
    return (
        <div className="flex-container" id="InfoBox">
            <Link to='/'>
                <div className='go-back'>{'< Go back'}</div>
            </Link>
            {!character && <div>Loading...</div>}
            {!!character &&
                <div className='character'>
                    <div className='title'>
                        <h1>{character.name}</h1>
                        <div>({character.homeworld})</div>
                    </div>
                    <h2>Films</h2>
                    {character.films.map((film, index) => {
                        return <div className='film' key={`film-${index}`}>{film}</div>
                    })}
                </div>
            }
            
        </div>
    );
}

export default CharInfo;