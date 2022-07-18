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

function getBookCard(index, book) {
	return (
		<div class="book" key={index}>
			<img
				src="{book.volumeInfo.imageLinks.smallThumbnail}"
				alt=""
				class="book__img"
			/>
			<h2 class="book__title">{book.volumeInfo.title}</h2>
			<h3 class="book__author">{book.volumeInfo.authors.join(", ")}</h3>
			<p class="book__desc">{book.volumeInfo.description}</p>
		</div>
	);
}

function getBookCards(books) {
	return books.reduce((cards, book) => {
		cards.push(getBookCard(book.id, book));
		return cards;
	}, []);
}

class Results extends React.Component {
	constructor(props) {
		super(props);

		this.state = { books: [] };
	}

	// update the books stored for the results.
	updateBooks(newBooks) {
		console.log(newBooks);
		this.setState({
			books: [...newBooks],
		});
	}

	// render the component to the screen.
	render() {
		return <div>{getBookCards(this.state["books"])}</div>;
	}
}

class Search extends React.Component {}

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
	updateResults(books);

	console.log(books);
}

async function fetchBooks(query) {
	// fetch the books for the api.
	let books = await searchAPI(query);
	return books.items;
}

function updateSearchBar(status) {}

function updateResults(books) {
	results.updateBooks(books);
	results.render(<Results />);
}

// attach the results.render to whenever the search button is pressed.
let search = document.querySelector(".search");
search.addEventListener("submit", async (event) => {
	event.preventDefault();
	performSearch();
});
