// get the searchbar element.
const search = document.querySelector(".search");

// align the search bar to the top or center of the page.
export function align(top = false) {
	top
		? search.classList.add("search--top")
		: search.classList.remove("search--top");
}

export function update(status) {
	// if the query was empty or there were no books returned, remove the top lock style.
	if (status.query === "" || status.books <= 0) {
		align(false);
	} else {
		align(true);
	}

	// alert the user if there were no books found.
	if (status.books <= 0) {
		alert(`No books found for ${status.query}`);
	}
}
