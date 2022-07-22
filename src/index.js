import { searchAPI } from "./api.js";
import * as Results from "./results.js";
import * as SearchBar from "./searchBar.js";
import * as Modal from "./modal.js";

let firstSearch = true;
let lastQuery = "";

async function performSearch(append = false) {
	SearchBar.showWaiting();
	if (!append) Results.clear();

	// get the query string.
	let query = SearchBar.getQuery();

	// get all books matching the query.
	let books = await fetchBooks(query);

	// update the searchbar style on success.
	SearchBar.update(query, books.length, false);
	SearchBar.showReady();

	// update the grid with all books found.
	if (!append) {
		Results.update(books);
	} else {
		Results.appendCards(books);
	}

	// append a card at the end of the result ot load more results.
	Results.appendLoadingCard(performSearchAppend);
}

async function performSearchNew() {
	performSearch(false);
}

async function performSearchAppend() {
	performSearch(true);
}

// fetch the books from the google api.
async function fetchBooks(query) {
	// fetch the books for the api.
	let books = await searchAPI(query);
	return books || []; //books.length > 0 ? books : [];
}

// attach the results.render to whenever the search button is pressed.
const search = document.querySelector(".search");
search.addEventListener("submit", (event) => {
	event.preventDefault();
	performSearchNew();
});

/* const append = document.querySelector("#append-button");
append.addEventListener("click", (event) => {
	event.preventDefault();
	performSearchAppend();
});
*/
