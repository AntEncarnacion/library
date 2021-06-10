let myLibrary = [new Book("The Hobbit", "J.R.R. Tolkien", 295, false)];

displayLibrary(myLibrary);

let createButtonTag = document.getElementById("createButton");
createButtonTag.onclick = () => {
  addBookToLibrary();
  displayLibrary();
};

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.info = () =>
    `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.haveRead ? "read" : "not read yet"
    }.`;
}

function addBookToLibrary() {
  myLibrary.push(
    new Book(
      window.prompt("Enter the book's title: "),
      window.prompt("Enter the book's author: "),
      window.prompt("Enter the number of pages the book has: "),
      window.prompt("Enter whether or not you have read the book: ")
    )
  );
  console.log(myLibrary)
}

function deleteBookFromLibrary(book) {
  myLibrary.splice(myLibrary.indexOf(book), 1);
}

function displayLibrary() {
  document.getElementById("library").innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    makeCard(myLibrary[i]);
  }
}

function makeCard(book) {
  const cardTag = document.createElement("div");

  const titleTag = document.createElement("h4");
  const bTag = document
    .createElement("b")
    .appendChild(document.createTextNode(book.title));
  titleTag.appendChild(bTag);

  const authorTag = document.createElement("p");
  authorTag.appendChild(document.createTextNode(book.author));

  const pagesTag = document.createElement("p");
  pagesTag.appendChild(document.createTextNode(book.pages));

  const readTag = document.createElement("p");
  readTag.appendChild(
    document.createTextNode(book.haveRead ? "Read" : "Not Read")
  );

  const delButtonTag = document.createElement("button");
  delButtonTag.appendChild(document.createTextNode("Delete"));

  delButtonTag.onclick = () => {
    deleteBookFromLibrary(book);
    displayLibrary();
  };

  cardTag.appendChild(titleTag);
  cardTag.appendChild(authorTag);
  cardTag.appendChild(pagesTag);
  cardTag.appendChild(readTag);
  cardTag.appendChild(delButtonTag);

  const currentDiv = document.getElementById("library");
  currentDiv.appendChild(cardTag);
}
