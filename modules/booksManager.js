import Book from "./bookClass.js"

export default class BookManager {
  constructor() {
    this.bookList = null;
  }

  getBooks() {
    this.bookList = JSON.parse(localStorage.getItem('bookList')) || [];
    return this.bookList;
  }

  saveBooks() {
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }

  addBook(title, author) {
    const bookId = Math.random().toString(36).replace(/[^a-z]+/g, '').slice(2, 5);
    const newBook = new Book(title, author, bookId);
    this.bookList.push(newBook);
    return bookId;
  }

  removeBook(e) {
    // Remove from localStorage
    this.bookList = JSON.parse(localStorage.getItem('bookList'));
    const bookId = e.target.id;
    const filteredBooks = this.bookList.filter((book) => book.id !== bookId);
    localStorage.setItem('bookList', JSON.stringify(filteredBooks));

    // Remove from the Interface (DOM)
    e.target.parentElement.parentElement.remove();
  }
}