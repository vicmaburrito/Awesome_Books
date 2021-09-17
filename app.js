/* eslint-disable max-classes-per-file */
/* eslint-disable eqeqeq */

const basicTable = document.getElementById('basicTable');




class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Manipulation {
  static allBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks() {
    const books = Manipulation.allBooks();

    books.forEach((book) => {
      const tr = document.createElement('tr');
      const button = document.createElement('button');

      tr.innerHTML = `
    <td class="row-data"><p class="p-0 m-0">"${book.title}" by ${book.author}</p></td>`;
      basicTable.append(tr);
      tr.append(button);
      button.setAttribute('id', book.id);
      button.setAttribute('class', 'remove');
      button.setAttribute('onclick', 'Manipulation.deleteBookMemory(this.id)');
      button.textContent = 'Remove';
    });
  }











  static addBook(newBook) {
    const getAllBooks = Manipulation.allBooks();
    getAllBooks.push(newBook);
    localStorage.setItem('books', JSON.stringify(getAllBooks));
  }

  static deleteBook(title, author) {
    const books = Manipulation.allBooks();

    books.forEach((book, index) => {
      if (book.title === title && book.author === author) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

class UserInterface {
  static IndexBooks(book) {
    const row = document.querySelector('#basic-table');
    const item = document.createElement('tr');

    item.innerHTML = `
    <td class="row-data"><p class="p-0 m-0">"${book.title}" by ${book.author}</p></td>
    <td><p class="d-none">${book.title}</p></td>
    <td><p class="d-none">${book.author}</p></td>
    <td><button class="destroy">Remove</button></td>
    `;

    row.appendChild(item);
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  static destroyBook(element) {
    if (element.classList.contains('destroy')) {
      element.parentElement.parentElement.remove();
    }
  }
}

document.addEventListener('DOMContentLoaded', UserInterface.displayBooks());

document.querySelector('#basic-form').addEventListener('submit', (t) => {
  t.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  if (title === '' || author === '') {
    const error = document.createElement('p');
    const location = document.querySelector('#basic-form');

    error.innerHTML = `
    <small class="alert">Please fill all the fields</small>
  `;

    location.appendChild(error);
  } else {
    const book = new Book(title, author);
    book.title = title;
    book.author = author;

    UserInterface.IndexBooks(book);

    LocalStorageForBooks.addBook(book);

    const success = document.createElement('p');
    const location = document.querySelector('#basic-form');

    success.innerHTML = `
    <small class="alert">Book added</small>
  `;
    location.appendChild(success);
    UserInterface.clearFields();
  }
  setTimeout(() => document.querySelector('.alert').remove(), 2000);
});

document.querySelector('#basic-table').addEventListener('click', (t) => {
  UserInterface.destroyBook(t.target);

  const delTitle = t.target.parentElement.previousElementSibling.previousElementSibling.textContent;

  const delAuthor = t.target.parentElement.previousElementSibling.textContent;

  LocalStorageForBooks.deleteBook(delTitle, delAuthor);
});

// Add clock functionality

const timeValue = document.getElementById('clock');
const { DateTime } = luxon; // eslint-disable-line
const currentTime = DateTime.now();
timeValue.textContent = currentTime.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);