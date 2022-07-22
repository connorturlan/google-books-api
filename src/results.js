import { resetBookCount } from "./api.js";
import { getBookCards } from "./books.js";

// get the results container.
const results = document.getElementById("results");

// show the results pane.
export function show() {
	results.classList.remove("results--hidden");
}

// hide the results pane.
export function hide() {
	results.classList.add("results--hidden");
}

// clear all book search results.
export function clear() {
	// reset the loaded book counter within the API.
	resetBookCount();

	// remove all children from the results grid.
	Array.from(results.children).reduce(
		(n, child) => results.removeChild(child),
		null
	);
}

export function appendCards(books) {
	// remove the append card if it exists.
	const append = results.querySelector(".card__append");
	if (append) results.removeChild(append);

	if (books.length > 0) {
		const cards = getBookCards(books);
		cards.reduce((n, card) => results.appendChild(card), null);
		show();
	}
}

export function appendLoadingCard(func) {
	const append = document.createElement("button");
	append.classList.add("card", "card__append");
	append.innerText = "Load more results.";

	append.addEventListener("click", (event) => {
		func();
	});

	results.appendChild(append);
}

// update the results section of the page with given entries of books.
export function update(books) {
	hide();

	// process all the books into cards and append them to the results.
	appendCards(books);
}
