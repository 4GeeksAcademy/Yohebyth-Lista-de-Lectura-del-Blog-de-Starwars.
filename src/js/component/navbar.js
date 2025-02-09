import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<div>
			<nav className="navbar navbar-dark bg-dark mb-3">
				<Link to="/">
					<img src="https://img.icons8.com/color/512/star-wars.png" alt="Star Wars Logo" className="navbar-logo" />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<Link to='' className="btn btn-dark dropdown-toggle bt-navbar" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</Link>
						<ul className="dropdown-menu dropdown-menu-end">
							{
								store.favorites.map((favorite) => (
									<li className="lidropdown">{favorite}
										<Link to='' className="nav-button">
											<i class="fa-solid fa-trash-can" onClick={() => actions.removeFavorite(favorite)}></i>
										</Link>
									</li>
								))
							}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
