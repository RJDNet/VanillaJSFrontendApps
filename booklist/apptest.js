class Book {
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

class UI {
  addBook(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="" class="delete">X</a></td>
    `

    list.appendChild(row);
  }

  removeBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
}

// Event Listeners --------------------------------------

// Add Book
document.getElementById('book-form').addEventListener('submit', function(e){

  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  const book = new Book(title, author, isbn);
  const ui = new UI();

  ui.addBook(book);  

  e.preventDefault();
});

// Remove Book
document.getElementById('book-list').addEventListener('click', function(e) {

  const ui = new UI();
  ui.removeBook(e.target);

  e.preventDefault();
})
