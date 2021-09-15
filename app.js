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

function addBook(newBook) {
  const getAllBooks = allBooks();
  getAllBooks.push(newBook);
  localStorage.setItem('books', JSON.stringify(getAllBooks));
};

function deleteBook(title, author) {
  const getAllBooks = allBooks();
  getAllBooks.forEach((book, index) => {
    if (book.title === title && book.author === author) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem('books', JSON.stringify(books));
}

// User Interface

function IndexBooks(book) {
    const row = document.querySelector('#basic-table');
    const item = document.createElement('tr');

    item.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td><button class="destroy btn btn-light">Remove</button></td>
    `;

    row.appendChild(item);
}

function displayBooks(){
  const books = allBooks();

  books.forEach((book) => IndexBooks(book));
}

function clearFields() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
}

function destroyBook(book) {
  if (element.classList.contains('destroy')){
    element.parentElement.parentElement.remove();
  }
}

// Events handling

// DOM to display books when content loaded
document.addEventListener('DOMContentLoaded', displayBooks());

// Event for adding books UI

document.querySelector('#basic-form').addEventListener('submit', (t) => {
  // default action
  t.preventDefault();

  // title, author values
const title = document.querySelector('#title').value;
const author = document.querySelector('#author').value;

  // Create book in storage

  // Create book in UI

  // Validation

  if (title === '' || author === '') {
    const error = document.createElement('p');
    const location = document.querySelector('#basic-form');

    error.innerHTML = `
    <small class="alert">Please fill all the fields</small>
  `;

    location.appendChild(error);
  } else {
    // Create the book in UI

    const book = {};
    book.title = title;
    book.author = author;

    // To UI
    IndexBooks(book);

    // To storage
    addBook(book);

    // Success message
    const success = document.createElement('p');
    const location = document.querySelector('#basic-form');

    success.innerHTML = `
    <small class="alert">Book added</small>
  `;
    location.appendChild(success);
    // Clear the fields
    clearFields();
  }
  // Dismiss these alerts after 2 secs
  setTimeout(() => document.querySelector('.alert').remove(), 2000);
});
document.querySelector('#form').addEventListener('click', (t) => {
  removeBook(t.target);

  // erase target title and author parent tags
});