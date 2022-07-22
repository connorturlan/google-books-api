const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
const languageNames = new Intl.DisplayNames(["en"], { type: "language" });

// gather the modal elements.
const modal = document.getElementById("modal");
const modalPane = document.getElementById("modal--bg");

// set the modal's book.
export function setBook(book) {
	// modify the modal pane to include the book's information.
	const title = modal.querySelector(".modal__title");
	title.innerText = book.title;

	const author = modal.querySelector(".modal__author");
	author.innerText = book.authors;

	const desc = modal.querySelector(".modal__desc");
	desc.innerHTML = book.description;

	const img = modal.querySelector(".modal__img");
	img.src = book.imageLink || "./images/unavailable.png";

	const date = modal.querySelector(".modal__release");
	date.innerText = "Released: " + book.releaseDate;

	const country = modal.querySelector(".modal__country");
	country.innerText = "Released in: " + book.country;

	const lang = modal.querySelector(".modal__langs");
	lang.innerText = "Availiable in: " + book.language;

	const link = modal.querySelector(".modal__link");
	link.href = book.link;
	if (!link.href) {
		src.tooltip = "Link unavailiable.";
	}
}

// show the modal pane.
export function show() {
	modalPane.classList.remove("modal__bg--hidden");
}

// hide the modal pane.
export function hide() {
	modalPane.classList.add("modal__bg--hidden");
}

// bind clicking off the modal to hiding the pane.
modalPane.addEventListener("click", (event) => hide());

// bind clicking the modal exit to hiding the pane.
document
	.querySelector(".modal__exit")
	.addEventListener("click", (event) => hide());

// prevent clicking on the modal hiding the modal.
modal.addEventListener("click", (event) => event.stopPropagation());
