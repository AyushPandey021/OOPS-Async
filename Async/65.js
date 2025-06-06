// day 65 ⏭️
//  async js
// sync js => single theraded tasks.
// sync  code main stack me chalta and  async code side stack me move ho jata h and main stack ki task complete hone ke side stack se main stack me move hoke run hota h this is process.

// main stack = coll stack -> excute  in main thread

// side stack => webAPI =>  collback queus=> (call stack  )=> main thread 


function getDetails(name, cb) {
  // .. api coll (data fectch)
  setTimeout(function () {
    console.log("Sending the request to insta.. ",);

  }, 1000)
  setTimeout(function () {
    console.log("fetching Data...");

  }, 3000)
  setTimeout(function () {
    console.log(" Data Ready...");
    cb()
  }, 6000)
}
getDetails("Ayush Pandey", function () {
  console.log("Data is save in gallery🎉🎉");

}, 2000)
// koi funtion ko chaltate waqt ye bata dena kaam krne ke baad kon sa funtion chalana hai 

// pratice
function stepOne(cb) {
  console.log("step 1");
  cb()
}
function stepTwo(cb) {
  console.log("step 2");
  cb()


}
function stepThree(cb) {
  console.log("step 3 ");
  cb()



}
stepOne(() => {

  stepTwo(() => {
    stepThree(() => {
      console.log("All good and all coll  called ");

    })
  })
})
//  collback hell 💠

// use promise  2 type code
// resolve
// and reject
// server ka code jab bhi server ke liye hoga useually asynce nahi hoga par jab bhi request kahi aur jaygi we kab tak responce laaygi ka kio bharosa nhi h 
let pr = new Promise((res, rej) => {
  console.log("instagram jao data laao ");
  console.log("collecting a data in instagram");
  console.log("Error to collecting data");

  console.log("insta data is here .....🎉");


})
pr.then(function () {
  console.log("resolved");


}).catch(() => {
  console.log("rejected");

})
