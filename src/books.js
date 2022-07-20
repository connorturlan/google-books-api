import * as Modal from "./modal.js";

function createBookCard(book) {
	const card = document.createElement("div");
	card.classList.add("book");

	// create the card elements.
	let info = book.volumeInfo;

	const img = document.createElement("img");
	img.classList.add("book__img");
	img.src =
		"imageLinks" in info
			? info.imageLinks.smallThumbnail
			: "./assets/example.jpg";

	const title = document.createElement("h2");
	title.classList.add("book__title");
	title.innerText = info.title;

	const author = document.createElement("h3");
	author.classList.add("book__author");
	author.innerText = info.authors;

	const desc = document.createElement("p");
	desc.classList.add("book__desc");
	desc.innerText = info.description;

	for (let node of [img, title, author, desc]) {
		card.appendChild(node);
	}

	// attach the modal updating style.
	card.addEventListener("click", (event) => {
		Modal.setBook(book);
		Modal.show();
	});

	return card;
}

export function getBookCards(books) {
	return books.reduce((cards, book) => {
		cards.push(createBookCard(book));
		return cards;
	}, []);
}
