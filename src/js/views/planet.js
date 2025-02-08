import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const PlanetDetails = () => {
    const params = useParams()
    const [planet, setPlanet] = useState({})
    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${params.uid}`)
            .then(res => res.json())
            .then(data => setPlanet(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className= "container">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} className="card-img-top" alt="..." style={{width: "18rem"}} />
            <h1>{planet.result?.properties?.name}</h1>
            <p>Diameter: {planet.result?.properties?.diameter} </p>
            <p>Rotation period: {planet.result?.properties?.rotation_period} </p>
            <p>Gravity: {planet.result?.properties?.gravity} </p>
        </div>
    )
};
