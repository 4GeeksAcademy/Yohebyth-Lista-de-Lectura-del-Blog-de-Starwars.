import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CharacterDetails } from "./views/characterDetails";
import { VehicleDetails } from "./views/vehicle";
import { PlanetDetails } from "./views/planet";

const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters/:uid" element={<CharacterDetails />} />
						<Route path="/vehicles/:uid" element={<VehicleDetails />} />
						<Route path="/planets/:uid" element={<PlanetDetails />} />
						<Route path="*" element={<h1>Not found!</h1>} />						
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
