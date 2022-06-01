const bookName = document.getElementById('name');
const bookAuthor = document.getElementById('author');

export let resetInput = () => {
  bookName.value = '';
  bookAuthor.value = '';
}