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