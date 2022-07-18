export const API_KEY = "AIzaSyAUHYgEMt0T9pnLUCNlgq_1Bg90r3B41wE";

// poll the google books api given a specific query.
export async function searchAPI(query) {
	const response = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${encodeURI(
			query
		)}&key=${API_KEY}`
	);

	if (response.ok) {
		return response.json();
	} else {
		showErrorMessage(response.status);
		return false;
	}
}
