import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const PlanetDetails = () => {
    const params = useParams()
    const [planet, setPlanet] = useState({})
    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${params.uid}`)
            .then(res => res.json())
            .then(data => setPlanet(data))
            .catch(err => console.error(err))
    }, [])

    const { store, actions } = useContext(Context)

    return (
        <div className="container details d-flex">
            <div className="detail">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} className="card-img-top" alt="..." style={{ width: "18rem" }} />
            </div>
            <div className="detail">
                <h1>{planet.result?.properties?.name}</h1>
                <p>Diameter: {planet.result?.properties?.diameter} </p>
                <p>Rotation period: {planet.result?.properties?.rotation_period} </p>
                <p>Gravity: {planet.result?.properties?.gravity} </p>
                <Link to='' className="btn btn-dark">
                    {
                        store.favorites.includes(planet.result?.properties?.name) ?
                            <i className="fa-solid fa-heart" onClick={() => actions.removeFavorite(planet.result?.properties?.name)}></i> :
                            <i className="fa-regular fa-heart" onClick={() => actions.addFavorite(planet.result?.properties?.name)}></i>
                    }
                </Link>
            </div>
        </div>
    )
};
