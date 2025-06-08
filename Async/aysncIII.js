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
function getPosts(userId) {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res(["title 1", "title 2"])

    }, 1000)
  })
}
function getComments(postId) {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res(["great post", " amazing content", "you rocked "])

    }, 1000)
  })

}
getUser().then(function (data) {
  console.log(data);

})
getPosts().then((data) => {

  console.log(data);
  getPosts(data.id)
  return getPosts(data.id)


})
  .then(function (titles) {
    console.log(titles);
    return getComments("fjajsdfk")

  })
  .then(function (comments) {
    console.log(comments);

  })
  .finally(function () {
    console.log("all data fectced");

  })

// ✔️ 3. Fake API delay 
//  task:
// write a function fakeApiCall(endpoint) that: 
// . Accepts a sting like " user" or "posts"
// . resolve with some dummy data after a random delay (1-3 sec)
function fakeApiCall(endPoint) {
  const data ={ 
  users :["Ayush", "Rohit", "Raghav"],
   posts : ["Hey champs", "great going everyone", "lets build this"]
  }

 let delay =  Math.random() * 2000 + 1000
 return new Promise(function(res,rej){
  setTimeout(function(){
console.log(data[endPoint]);

  },delay)
 })
}
  
  fakeApiCall("posts" /*user*/).then(function(data){
    console.log(data);
    
  })
