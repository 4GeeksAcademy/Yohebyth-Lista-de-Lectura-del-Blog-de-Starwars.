import React, { useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Cards = ({view, uid, name}) => {

    const { store, actions } = useContext(Context)

    return (
        <div className="col-md-4 col-lg-3">
            <div className="card">
                <img src={`https://starwars-visualguide.com/assets/img/${view}/${uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="button-group">
                        <Link to={`/characters/${uid}`}>
                            <button className="btn btn-dark">More details</button>
                        </Link>
                        <Link to='' className="btn btn-dark">
                            {
                                store.favorites.includes(name) ?
                                    <i className="fa-solid fa-heart" onClick={() => actions.removeFavorite(name)}></i> :
                                    <i className="fa-regular fa-heart" onClick={() => actions.addFavorite(name)}></i>
                            }

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};