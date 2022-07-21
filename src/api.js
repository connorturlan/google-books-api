//import { API_KEY } from "./key.js";

// sigh... api key can't be hidden for it to work on gh-pages.
const API_KEY = "AIzaSyAUHYgEMt0T9pnLUCNlgq_1Bg90r3B41wE";

function showErrorMessage(status) {
	alert(`Error while searching for book. (${status})`);
}

// poll the google books api given a specific query.
export async function searchAPI(query) {
	if (query === "") {
		return false;
	}

	const response = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${encodeURI(
			query
		)}&maxResults=40&key=${API_KEY}`
	);

	if (response.ok) {
		return response.json();
	} else {
		showErrorMessage(response.status);
		return false;
	}
}
