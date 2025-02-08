import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const CharacterDetails = () => {
    const params = useParams()
    const [character, setCharacter] = useState({})
    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${params.uid}`)
            .then(res => res.json())
            .then(data => setCharacter(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className= "container">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} className="card-img-top" alt="..." style={{width: "18rem"}} />
            <h1>{character.result?.properties?.name}</h1>
            <p>Hair Color: {character.result?.properties?.hair_color} </p>
            <p>Height: {character.result?.properties?.height} </p>
            <p>Skin Color: {character.result?.properties?.skin_color} </p>
            <p>Gender: {character.result?.properties?.gender} </p>
        </div>
    )
};