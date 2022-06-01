// Sections
const allBooks = document.querySelector('.all-books');
const addingBook = document.querySelector('.adding-book');
const contact = document.querySelector('.contact');

export default function displaySection(e) {
  if (e.target.id === 'display-list') {
    allBooks.style.display = 'block';
    addingBook.style.display = 'none';
    contact.style.display = 'none';
  } else if (e.target.id === 'display-form') {
    allBooks.style.display = 'none';
    addingBook.style.display = 'block';
    contact.style.display = 'none';
  } else {
    allBooks.style.display = 'none';
    addingBook.style.display = 'none';
    contact.style.display = 'block';
  }
}