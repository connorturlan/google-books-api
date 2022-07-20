// gather the modal elements.
const modal = document.getElementById("modal");
const modalPane = document.getElementById("modal--bg");

// set the modal's book.
export function setBook(book) {
	modal.querySelector(".book__title").innerText = book.volumeInfo.title;
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
