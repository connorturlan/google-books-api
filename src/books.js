function createBookCard(book) {
	const card = document.createElement("div");
	card.classList.add("book");

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
	desc.innerText = info.description;
	desc.classList.add("book__desc");

	for (let node of [img, title, author, desc]) {
		card.appendChild(node);
	}

	return card;
}

export function getBookCards(books) {
	return books.reduce((cards, book) => {
		cards.push(createBookCard(book));
		return cards;
	}, []);
}
