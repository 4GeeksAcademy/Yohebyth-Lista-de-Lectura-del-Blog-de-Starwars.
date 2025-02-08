import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const VehicleDetails = () => {
    const params = useParams()
    const [vehicle, setVehicle] = useState({})
    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${params.uid}`)
            .then(res => res.json())
            .then(data => setVehicle(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className= "container">
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`} className="card-img-top" alt="..." style={{width: "18rem"}} />
            <h1>{vehicle.result?.properties?.model}</h1>
            <p>Vehicle class: {vehicle.result?.properties?.vehicle_class} </p>
            <p>Manufacturer: {vehicle.result?.properties?.manufacturer} </p>
            <p>Length: {vehicle.result?.properties?.length} </p>
        </div>
    )
};
