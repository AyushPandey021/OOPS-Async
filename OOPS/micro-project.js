// 💠Library  💠
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
    this.book.push(...book);
  }
  listAllBooks() {
    this.book.forEach(function (book, index) {
      console.log(` ${index + 1} ) ${book.name} by ${book.author}`);
    });
  }
}
class Book {
  constructor(name, isbn, price, author) {
    this.name = name;
    this.isbn = isbn;
    this.price = price;
    this.author = author;
    this.readStatus = false;
  }
  info() {
    console.log(
      ` ${this.readStatus ? "✔️" : " ❌"} ${this.name} is written by ${this.author} and you have ${this.readStatus ? " read it  " : "you not read this book"} and is available at amazon in price is ${this.price}  `
    );
  }
  changeReadStatus() {
    this.readStatus = !this.readStatus;
  }
}
let SeoniLibrary = new Library();
let b1 = new Book("money is life ", "mere paise de", 120, "Ayush Pandey");
let b2 = new Book("Do  you love yourself ", "asdfasdf", 1120, "krish Shing");
let b3 = new Book("69 ", "asdfda", 990, "Jonny mishra");

// SeoniLibrary.addBook("Pyscology of Money");
// SeoniLibrary.addBook("Do you love yourself");
SeoniLibrary.addBook([b1, b2, b3]);

// SeoniLibrary.listAllBooks();

// 💠Project 2💠
class MobaileShop {
  constructor(brand, model, price, color) {
    this.mobile = [];
  }
  addMobile(mobile) {
    this.mobile.push(mobile);
  }
  removeMobile(mobile) {
    this.mobile.indexOf();
  }
  listAllMobiles() {
    this.mobile.forEach(function (mb, index) {
      console.log(
        ` ${mb.index + 1}) - ${mb.brand} -${mb.model} - ${mb.color} - ${mb.price}`
      );
    });
  }
}
class Mobile {
  constructor(brand, model, price, color) {
    this.id = Math.floor(Math.random() * 8000);
    this.model = model;
    this.color = color;
    this.brand = brand;
    this.price = price;
    this.sims = [];
  }
  getMobileInfo() {
    console.log(
      `${this.brand}- ${this.model} = ${this.price} - ${this.color} }`
    );
  }
  insertSim(sim) {
    if (this.sims.length === 2) {
      console.log("sorry you already 2 sims installed");
      return;
    }
    this.sims.push(sim);
  }
}

class sim {
  constructor(brand, balance) {
    this.brand = brand;
    this.balance = balance;
  }
  addBalance(balance) {
    if (balance < 0) {
      console.log("to add balance give amount grearter than 0 ");
      return;
    }
    this.balance += balance;
  }
}
let saiMobile = new MobaileShop();
let Realme = new Mobile("Realme", "c11", 20000, "yellow");
let jio = new sim("jio", 349);
Realme.insertSim(jio);
saiMobile.addMobile(Realme);
