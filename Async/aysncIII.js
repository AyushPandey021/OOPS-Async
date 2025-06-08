

// Day 66 : aync js level 3 ⏭️ 
function stepOne() {
  return new Promise((res, rej) => {
    console.log("STep 1");
    res()
  })
}
function stepTwo() {
  return new Promise((res, rej) => {
    console.log("STep 2");
    res()
  })
}
function stepTherr() {
  return new Promise((res, rej) => {
    console.log("STep 3");
    res()
  })
}


stepOne()
  .then(stepTwo)
  .then(stepTherr)
  .then(function () {
    console.log("done all steps ");
    res()
  })

// 💠  Question Sloveing 💠
// ✔️ 1. Simulate a Food Delivery
// Task: Create a funtion orderFood that returns a Proise. It should reslove after 2 secods with 🍕 Pizza Delived
//  Bonus : Add  a chance to reject with "🚫Delivey failed"


function orderFood() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let chance = Math.random() < 0.7
      if (chance) res()
      else rej()


    }, 2000)
  })
}
orderFood()
  .then(function () {
    console.log("🍕pizza delivered");
  })
  .catch(function () {
    console.log("🚫Delivey failed");
  })


// ✔️ 2. Chained Promises: User -> Posts -> Comments 
//   Task: 
// 1. Create getUser() -> reslove with {id : 1, name: "Ayush "}
// 2. getPosts(userId)-> reslove with list of post titles
// 3. getComments(postId)-> reslove with comments
// chain them together using .then() and log the final output.
function getUser() {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res({ id: 1, name: "Ayush" })
    }, 1000

    )
  })
}
function getPosts(userId){
  return new Promise((res,rej)=>{
    setTimeout(function(){
      res(["title 1", "title 2"])

    }, 1000)
  })
}
getUser().then(function(data){
  console.log(data);
  
})
getPosts().then