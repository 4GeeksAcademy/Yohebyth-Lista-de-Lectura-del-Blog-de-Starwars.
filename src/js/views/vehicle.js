import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const VehicleDetails = () => {
    const params = useParams()
    const [vehicle, setVehicle] = useState({})
    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${params.uid}`)
            .then(res => res.json())
            .then(data => setVehicle(data))
            .catch(err => console.error(err))
    }, [])

    const { store, actions } = useContext(Context)

    return (
        <div className="container details d-flex">
            <div className="detail">
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`} className="card-img-top" alt="..." style={{ width: "18rem" }} />
            </div>
            <div className="detail">
                <h1>{vehicle.result?.properties?.model}</h1>
                <p>Vehicle class: {vehicle.result?.properties?.vehicle_class} </p>
                <p>Manufacturer: {vehicle.result?.properties?.manufacturer} </p>
                <p>Length: {vehicle.result?.properties?.length} </p>
                <Link to='' className="btn btn-dark">
                    {
                        store.favorites.includes(vehicle.result?.properties?.name) ?
                            <i className="fa-solid fa-heart" onClick={() => actions.removeFavorite(vehicle.result?.properties?.name)}></i> :
                            <i className="fa-regular fa-heart" onClick={() => actions.addFavorite(vehicle.result?.properties?.name)}></i>
                    }
                </Link>
            </div>
        </div>
    )
};
