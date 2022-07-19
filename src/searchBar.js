// get the searchbar element.
const search = document.querySelector(".search");

export function showHelp(visible) {
	let help = search.querySelector(".search__help");
	if (visible) {
		help.classList.remove("search__help--hidden");
	} else {
		help.classList.add("search__help--hidden");
	}
}

// align the search bar to the top or center of the page.
export function align(top = false) {
	top
		? search.classList.add("search--top")
		: search.classList.remove("search--top");
}

export function update(responseBooks, firstSearch = false) {
	// hide the help after the first search.
	showHelp(firstSearch);

	// if the query was empty or there were no books returned, remove the top lock style.
	if (responseBooks.query === "" || responseBooks.books <= 0) {
		align(false);
	} else {
		align(true);
	}

	// alert the user if there were no books found.
	if (responseBooks.books <= 0) {
		alert(`No books found for ${responseBooks.query}`);
	}
}
