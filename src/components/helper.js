// takes in the SWAPI url and reverses it to grab the character's id given their link

export const getCharacterID = (url) => {
    return url.split('/').reverse()[1];
}