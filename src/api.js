//import { API_KEY } from "./key.js";

// sigh... api key can't be hidden for it to work on gh-pages.
const API_KEY = "AIzaSyAUHYgEMt0T9pnLUCNlgq_1Bg90r3B41wE";

const numberOfResults = 36;

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
const languageNames = new Intl.DisplayNames(["en"], { type: "language" });

function showErrorMessage(status) {
	alert(`Error while searching for book. (${status})`);
}

// remap the returned json into a more palattable version.
export function remapJSON(response) {
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

	const response = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${encodeURI(
			query
		)}&maxResults=${numberOfResults}&key=${API_KEY}`
	);

	if (response.ok) {
		return remapJSON(await response.json());
	} else {
		showErrorMessage(response.status);
		return false;
	}
}
