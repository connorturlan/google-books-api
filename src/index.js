import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import { API_KEY } from "./api.js";

function searchAPI(query) {}

class Results extends React.Component {
	render() {
		return <div></div>;
	}
}

// get the results container.
const results = ReactDOM.createRoot(document.getElementById("results"));

// attach the results.render to whenever the search button is pressed.
let search = document.querySelector(".search");
search.addEventListener("submit", (event) => {
	event.preventDefault();

	console.log("lmao, begin search.");
	results.render(<Results />);
});
