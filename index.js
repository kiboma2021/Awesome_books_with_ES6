/* eslint-disable max-classes-per-file */

// Extracted function from lesson

import BookManager from "./modules/booksManager.js"
import resetInput from "./modules/resetInput.js"
import displayBook from "./modules/display.js"
import displaySection from "./modules/displaySelection.js"

function storageAvailable(type) {
  let storage;
  try {
    const x = '__storage_test__';
    storage = window[type];
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
                // everything except Firefox
                && (e.code === 22
                // Firefox
                || e.code === 1014
                // test name field too, because code might not be present
                // everything except Firefox
                || e.name === 'QuotaExceededError'
                // Firefox
                || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
                // acknowledge QuotaExceededError only if there's something already stored
                && storage
                && storage.length !== 0
    );
  }
}

const bookName = document.getElementById('name');
const bookAuthor = document.getElementById('author');
const addBtn = document.getElementById('add');
let books;

const library = new BookManager();


if (storageAvailable('localStorage')) {
  window.addEventListener('load', () => {
    books = library.getBooks();
    if (books.length !== 0) {
      books.forEach((book) => displayBook(book.title, book.author, book.id));
    }
  });
  addBtn.addEventListener('click', () => {
    library.getBooks();
    const bookId = library.addBook(bookName.value, bookAuthor.value);
    library.saveBooks();
    displayBook(bookName.value, bookAuthor.value, bookId);
    resetInput();
  });
}

// Menu links
const menuBtns = document.querySelectorAll('.menuBtn');

menuBtns.forEach((btn) => {
  btn.addEventListener('click', displaySection);
});

// Adding date
const dateContainer = document.querySelector('#date');

const date = new Date();

const year = date.getFullYear();
const month = date.toLocaleString('default', { month: 'long' });
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

dateContainer.textContent = `${month} ${day} ${year}, ${hour}:${minutes}:${seconds}`;