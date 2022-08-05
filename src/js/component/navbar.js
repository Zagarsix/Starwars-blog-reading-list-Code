import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg fixed-top bg-dark d-flex justify-content-between py-1">
			<div className="container">
				<Link className="navbar-brand fs-2 align-items-start" id="NavbarForce" to="/">
					"May the code be with you"
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/characters">
								Characters
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/planets">
								Planets
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/vehicles">
								Vehicles
							</Link>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdownMenuLink"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Favorites
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="navbarDropdownMenuLink"
							>
								{store.favorites.map((name) => {
									return (
										<li>
											<a className="dropdown-item" href="#">
												{name}
												<button onClick={() => actions.deleteFavorites(name)} className="btn btn-outline-success"><i class="fas fa-trash-alt"></i></button>
											</a>
										</li>
									)
								})}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>

	);
};
