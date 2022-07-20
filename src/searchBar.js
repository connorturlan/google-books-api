// get the searchbar element.
const search = document.querySelector(".search");

export function getQuery() {
	return search.querySelector("#search-query").value;
}

function showStatus(isWaiting) {
	let btn = search.querySelector("#search-button");
	if (isWaiting) {
		btn.classList.add("search__submit--wait");
		btn.value = "Searching...";
	} else {
		btn.classList.remove("search__submit--wait");
		btn.value = "Search";
	}
}

export function showWaiting() {
	showStatus(true);
}

export function showReady() {
	showStatus(false);
}

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

export function update(query, length, firstSearch = false) {
	// hide the help after the first search.
	showHelp(firstSearch);

	// if the query was empty or there were no books returned, remove the top lock style.
	align(!(query === "" || length <= 0));

	// alert the user if there were no books found.
	if (length <= 0) {
		alert(query ? `No books found for "${query}".` : `No query provided.`);
	}
}
