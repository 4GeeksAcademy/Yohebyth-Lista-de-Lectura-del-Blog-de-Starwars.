import React, { useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Cards } from "../component/cards";

export const Home = () => {

	const { store} = useContext(Context)

	return (
		< div className="container text-center mt-5" >
			<div className="row">
				<div className="cards">
					<h1>Characters</h1>
						<div className="d-flex custom-card">
							{
								store.characters.map(character => {
									return (
										<Cards view={"characters"} uid={character.uid} name={character.name}/>							
									)
								})
							}
						</div>
				</div>				

				<div className="cards">
					<h1>Vehicles</h1>
					<div className="d-flex custom-card">
						{
							store.vehicles.map(vehicle => {
								return (
									<Cards view={"vehicles"} uid={vehicle.uid} name={vehicle.name}/>							
								)
							})

						}
					</div>
				</div>				

				<div className="cards">
					<h1>Planets</h1>
					<div className="d-flex custom-card">
						{
							store.planets.map(planet => {
								return (
									<Cards view={"planets"} uid={planet.uid} name={planet.name}/>
									
								)
							})
						}
					</div>
				</div>				
			</div>
		</div>
	)
};
