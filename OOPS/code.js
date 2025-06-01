// ✔️Encapsulation
class ap{
  constructor(name ,age){
  this.name = name;
  this.age= age;
}
greet(){
console.log(`Hello my name is ${this.name} + and my age is ${this.age}`);

}
}
const a1 = new ap('ARUSH', 55)
a1.greet()

// Inheritance ✔️

class pat{
  speak(){
    console.log("Pat speaks");
    
  }
}
class miaow extends pat{ //inharit
miaow(){
  console.log("cat is miow");
  
}
}
const d = new miaow()
d.speak(
  d.miaow()
)