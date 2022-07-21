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
	// remove all children from the results grid.
	Array.from(results.children).reduce(
		(n, child) => results.removeChild(child),
		null
	);
}

// update the results section of the page with given entries of books.
export function update(books) {
	hide();
	clear();

	// process all the books into cards and append them to the results.
	if (books.length > 0) {
		const cards = getBookCards(books);
		cards.reduce((n, card) => results.appendChild(card), null);
		show();
	}
}
