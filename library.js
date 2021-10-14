document.addEventListener('DOMContentLoaded', function() {
    displayLibrary()
    bookBtn = document.querySelector('.add-book')
    bookBtn.addEventListener('click', () => (displayForm(bookBtn)));
    var addBookForm = document.querySelector('.form-container')
    addBookForm.addEventListener('submit', (event) => {
        addBookToLibrary(); 
    });

})

function Book(title, author, pages, read = false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages} pages ${read == true ? 'have read': 'not read yet'}`;
    }

}

let myLibrary = [];


function addBookToLibrary() {
    event.preventDefault();
    const form = document.getElementById('add-book-form')
    var title = form.elements['title']
    var author = form.elements['author']
    var pages = form.elements['pages']
    var checkbox = document.getElementById("read-checkbox").checked;
    title = title.value
    author = author.value
    pages = pages.value
    newBook = new Book(title, author, pages, checkbox)
    myLibrary.push(newBook);
    form.reset();
    closeForm();
    displayLibrary();
}

function removeBookFromLibrary() {
    index = event.target.parentElement.dataset.index
    myLibrary.splice(index, 1);
    displayLibrary()
}

function displayForm(bookBtn) {
    bookBtn.style.display = "none";
    document.querySelector('.form-popup').style.display = "block";
}

function closeForm() {
    document.querySelector('.form-popup').style.display = "none";
    document.querySelector('.add-book').style.display = "block"


}

function displayLibrary() {
    let books = document.querySelector('.books');
    books.innerHTML = '';
    myLibrary.forEach(item => {
        let index = myLibrary.indexOf(item)
        let book = document.createElement('div')
        book.className = "card";
        let deleteBook = document.createElement('button');
        deleteBook.innerHTML = "delete"
        deleteBook.className = "btn del-btn"
        book.dataset.index = index
        deleteBook.onclick = function() { removeBookFromLibrary(); };
        let toggleRead = document.createElement('button');
        toggleRead.innerHTML = 'read?';
        toggleRead.className = "btn toggle-btn"
        toggleRead.onclick = function() { toggleReadStatus(); };
        book.innerHTML = `
        <h5 id="title">Title: ${item.title}</h5>
        <h5>Author: ${item.author}</h5>
        <h6>Pages: ${item.pages}</h6>
        <h6>${item.read == true ? "Read" : "Not read"}</h6>`;
        books.appendChild(book)
        book.appendChild(deleteBook)
        book.appendChild(toggleRead)
    });
}

function toggleReadStatus() {
    let index = event.target.parentElement.dataset.index
    if (myLibrary[index].read === false) {
        myLibrary[index].read = true
    } else {
        myLibrary[index].read = false
    }
    displayLibrary();
}






theHobbit = new Book("The Hobbit", "JRR Tokien", 295)
warAndPeace = new Book("War and Peace", "Fyodor Dostoyevsky", 800)
nineteenEightyFour = new Book("1984", "George Orwell", 300)
myLibrary.push(theHobbit)
myLibrary.push(warAndPeace)
myLibrary.push(nineteenEightyFour)