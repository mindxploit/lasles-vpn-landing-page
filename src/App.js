import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import Info from "./components/Info";
import Features from "./components/Features";
import Plan from "./components/Plan";
import Map from "./components/Map";
import Sponsors from "./components/Sponsors";
import Reviews from "./components/Reviews";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<NavBar />
			<Presentation />
			<Info />
			<Features />
			<Plan />
			<Map />
			<Sponsors />
			<Reviews />
			<Footer />
		</>
	);
}

export default App;
