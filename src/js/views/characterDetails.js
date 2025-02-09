import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CharacterDetails = () => {
    const params = useParams()
    const [character, setCharacter] = useState({})
    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${params.uid}`)
            .then(res => res.json())
            .then(data => setCharacter(data))
            .catch(err => console.error(err))
    }, [])

    const { store, actions } = useContext(Context)

    return (
        <div className="container details d-flex">
            <div className="detail">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} className="card-img-top" alt="..." style={{ width: "18rem" }} />
            </div>
            <div className="detail">
                <h1>{character.result?.properties?.name}</h1>
                <p>Hair Color: {character.result?.properties?.hair_color} </p>
                <p>Height: {character.result?.properties?.height} </p>
                <p>Skin Color: {character.result?.properties?.skin_color} </p>
                <p>Gender: {character.result?.properties?.gender} </p>
                <Link to='' className="btn btn-dark">
                    {
                        store.favorites.includes(character.result?.properties?.name) ?
                            <i className="fa-solid fa-heart" onClick={() => actions.removeFavorite(character.result?.properties?.name)}></i> :
                            <i className="fa-regular fa-heart" onClick={() => actions.addFavorite(character.result?.properties?.name)}></i>
                    }
                </Link>
            </div>
        </div>
    )
};