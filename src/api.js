//import { API_KEY } from "./key.js";

// sigh... api key can't be hidden for it to work on gh-pages.
const API_KEY = "AIzaSyAUHYgEMt0T9pnLUCNlgq_1Bg90r3B41wE";

const numberOfResults = 36;
let currentlyLoadedBooks = 0;
let lastQuery = "";

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
const languageNames = new Intl.DisplayNames(["en"], { type: "language" });

function showErrorMessage(status) {
	alert(`Error while searching for book. (${status})`);
}

export function resetBookCount() {
	currentlyLoadedBooks = 0;
}

// remap the returned json into a more palattable version.
export function remapJSON(response) {
	currentlyLoadedBooks += response.items.length;
	return response.items.map((book) => {
		let { volumeInfo, saleInfo, ...otherProps } = book;
		return {
			title: volumeInfo.title,
			authors:
				(volumeInfo.authors || []).join(", ") || "Author unavailable",
			imageLink:
				"imageLinks" in volumeInfo
					? volumeInfo.imageLinks.smallThumbnail ||
					  volumeInfo.imageLinks.thumbnail
					: "",
			description: volumeInfo.description || "Description unavailable.",
			releaseDate:
				volumeInfo.publishedDate || "Release date unavailable.",
			country:
				regionNames.of(book.saleInfo.country) || "Country unavailable.",
			language:
				languageNames.of(volumeInfo.language) ||
				"Language unavailable.",
			link:
				volumeInfo.canonicalVolumeLink ||
				volumeInfo.infoLink ||
				volumeInfo.previewLink ||
				"",
		};
	});
}

// poll the google books api given a specific query.
export async function searchAPI(query) {
	if (query === "") {
		return false;
	}

	// reset starting index if the query is unexpectedly changed.
	if (query !== lastQuery) currentlyLoadedBooks = 0;
	lastQuery = query;

	const response = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${encodeURI(
			query
		)}&maxResults=${numberOfResults}&startIndex=${currentlyLoadedBooks}&key=${API_KEY}`,
		{ "Content-Type": "application/json" }
	);

	if (response.ok) {
		let json = await response.json();
		return remapJSON(json);
	} else {
		showErrorMessage(response.status);
		return false;
	}
}
