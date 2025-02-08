import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<div class="container">
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<img src="https://logos-world.net/wp-content/uploads/2020/11/Star-Wars-Logo.png" alt="Star Wars Logo" className="navbar-logo" />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-dark dropdown-toggle bt-navbar" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu">
							{store.favorites.map((favorite) => (


								<li style={{ marginTop: "10px" }}>{favorite}
									<button className="nav-button" onClick={() => actions.removeFavorite(favorite)} >
										<i class="fa-thin fa-x"></i>
									</button>
								</li>

							))}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
