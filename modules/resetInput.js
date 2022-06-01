const bookName = document.getElementById('name');
const bookAuthor = document.getElementById('author');

export default function resetInput() {
  bookName.value = '';
  bookAuthor.value = '';
}