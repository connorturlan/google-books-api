import { searchAPI } from "./api.js";
import * as Results from "./results.js";
import * as SearchBar from "./searchBar.js";
import * as Modal from "./modal.js";

var firstSearch = true;

async function performSearch() {
	SearchBar.showWaiting();
	Results.clear();

	// get the query string.
	let query = SearchBar.getQuery();

	// get all books matching the query.
	let books = await fetchBooks(query);

	// update the searchbar style on success.
	SearchBar.update(query, books.length, false);
	SearchBar.showReady();

	// update the grid with all books found.
	Results.update(books);
}

// fetch the books from the google api.
async function fetchBooks(query) {
	// fetch the books for the api.
	let books = await searchAPI(query);
	return books.totalItems > 0 ? books.items : [];
}

// attach the results.render to whenever the search button is pressed.
let search = document.querySelector(".search");
search.addEventListener("submit", (event) => {
	event.preventDefault();
	performSearch();
});
