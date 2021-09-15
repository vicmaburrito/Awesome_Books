const inputTitle = document.querySelectorAll('#title');
const inputAuthor = document.querySelectorAll('#author');
const books = []

// Local Storage

function allBooks() {
  // get books from local storage
  let books;
  if (localStorage.getItem('books') == null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
}


// User Interface

function addBook() {
  const createRow = document.getElementsByClassName("table-body").createElement("tr");
  createRow.appendChild("td", title, body);
};

function displayBooks() {
  // Show all books in table
}

function removeBook(book) {
  // Remove book from DOM
}

// Events handling

// DOM to display books when content loaded

document.querySelector('#form').addEventListener('submit', (t) => {
  // default action
  t.preventDefault();

  // title, author values

  // Create book in storage

  // Create book in UI

});

document.querySelector('#form').addEventListener('click', (t) => {
  removeBook(t.target);

  // erase target title and author parent tags
});