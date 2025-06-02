// using a function
function Toffee(flavor, price, expiry) {
  this.flavor = flavor;
  this.price = price;
  this.expiry = "expiry";
}

// isme new a matlb hota h constructor
let t1 = new Toffee("kulfi", 10, "2025-02-45");
let t2 = new Toffee("chocolate", 15, "2025-05-8");
let t3 = new Toffee("coco", 10, "2024-12-15");

// is called a factory matlb ek baar bnao use kro baar baar
// is called oops

// class Toffee{
//   //har class banate hi pehli chiz jo banate hai uski aadat daal lo unka name hai constructor
// }

// agr aap class ka use krte ho object bnane me to hum sabse pehle use krte h contructor
// use a class function
class cookie {
  constructor(flavor, color, taste) {
    this.flavor = flavor;
    this.color = color;
    this.taste = taste;
    // this.texture = "hard";
    // this.shape = "cube";
    // this.size = "small";
    // isme hun  new use ni kr rhe kyu ki hamne  constructor lga liya h
  }
}

let a1 = new cookie("rose", "red", "sweet");
let a2 = new cookie("coco", "brown", "sweets");
let a3 = new cookie("vanilla", "gray", "sweets");

//💠 Day 58 oops level 2

function humam(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
}

humam.prototype.msg = function () {
  console.log("heyy");
};
let h1 = new humam("Ayush", 19, 5.11);
let h2 = new humam("Sumit", 23, 5.2);
let h3 = new humam("Krish", 22, 5);

//  sabse pehle property ko apke object me dekhenge nahi mila to  prototype main dhundte hai.
function car(name) {
  this.name = name;
}
// agr apne this,price bi return kiya and price protoype me bi bnanaya h to this.price wala read hoke return hota h 
car.prototype.price = 1000000;
let c1 = new car("swift");
