import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import { API_KEY } from "./api.js";

function showErrorMessage(status) {
	alert(`Error while searching for book. (${status})`);
}

async function searchAPI(query) {
	const response = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
	);

	if (response.ok) {
		return response.json();
	} else {
		showErrorMessage(response.status);
		return false;
	}
}

function Card(props) {
	return "";
}

class Results extends React.Component {
	render() {
		return <div></div>;
	}
}

// get the results container.
const results = ReactDOM.createRoot(document.getElementById("results"));

async function performSearch() {
	// get the query string.
	let query = document.getElementById("search-query").value;

	// get all books matching the query.
	let books = await fetchBooks(query);

	// update the searchbar style on success.
	updateSearchBar(books.length);

	// update the grid with all books found.
	updateGrid(books);

	console.log(books);
}

async function fetchBooks(query) {
	// fetch the books for the api.
	let books = await searchAPI(query);
	return books.items;
}

function updateSearchBar(status) {}

function updateGrid(status) {
	results.render(<Results />);
}

// attach the results.render to whenever the search button is pressed.
let search = document.querySelector(".search");
search.addEventListener("submit", async (event) => {
	event.preventDefault();
	performSearch();
});
