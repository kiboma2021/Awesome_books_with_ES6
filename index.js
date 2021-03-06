/* eslint-disable max-classes-per-file */

// Extracted function from lesson

import BookManager from "./modules/booksManager.js"
import { resetInput } from "./modules/resetInput.js"
import displayBook from "./modules/display.js"
import displaySection from "./modules/displaySelection.js"
import { storageAvailable } from "./modules/storage.js"
import { DateTime } from "./modules/luxon.js";


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
const date_today = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
dateContainer.textContent = `${date_today}`;

