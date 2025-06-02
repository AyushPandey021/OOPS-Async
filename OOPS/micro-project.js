//  virtual library
class Library {
  constructor() {
    this.book = []; // sari books ka record yaha par hai
    //add krna
    // issue book
    // read book
    // list of all book
  }
  addBook(book) {
    this.book.push(book);
  }
  listAllBooks() {
    this.listAllBooks.forEach(function (book) {
      console.log(book);
    });
  }
}
class Book {
  constructor(name, isbn, price, author) {
    this.name = name;
    this.isbn = isbn;
    this.price = price;
    this.author = author;
  }
}


let b1 = new Book("money is life ", "mere paise de",120, "Ayush Pandey")
// let SeoniLibrary = new Library();
// SeoniLibrary.addBook("Pyscology of Money");
// SeoniLibrary.addBook("Do you love yourself");
// SeoniLibrary.addBook("kinzen");
// SeoniLibrary.listAllBooks();


// time is 14min