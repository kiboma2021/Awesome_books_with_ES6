class BookManager {
  constructor() {
    this.bookList = null;
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
const library = new BookManager();


let displayBook = (title, author, id) => {
  // Book list container
  const bookContainer = document.querySelector('.col-1');

  // Book container
  const bkdiv = document.createElement('div');
  bkdiv.classList.add('flex');

  // book-details container
  const bkdetails = document.createElement('div');
  bkdetails.classList.add('bk-details');
  bkdiv.appendChild(bkdetails);

  // Title of the book
  const addTitle = document.createElement('h2');
  addTitle.textContent = `"${title}"`;
  bkdetails.appendChild(addTitle);

  // paragraph insertion

  const paragraph = document.createElement('p');
  bkdetails.appendChild(paragraph);
  paragraph.innerText = 'by';

  // Author of the book
  const addAuthor = document.createElement('p');
  addAuthor.innerHTML = author;
  bkdetails.appendChild(addAuthor);

  // btn-details container
  const btnDiv = document.createElement('div');
  btnDiv.classList.add('btn-details');
  bkdiv.appendChild(btnDiv);

  // Remove Button
  const rmBtn = document.createElement('button');
  rmBtn.textContent = 'Remove';
  rmBtn.classList.add('rmbtn');
  rmBtn.id = id;
  rmBtn.addEventListener('click', library.removeBook);
  btnDiv.appendChild(rmBtn);

  // Parting line
  // const hr = document.createElement('hr');
  // bkdiv.appendChild(hr);

  bookContainer.appendChild(bkdiv);
}

export default displayBook;