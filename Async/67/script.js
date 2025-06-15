// day 67 of aysnc javascript level 4

// fetch => js funtion hota h fetch ka mean h lekr aana fetch('https://jsonplaceholder.typicode.com/posts') kuch aisa fect hamesha ek promies create krta h isliye isme bi resolve or reject hote h. fectch api bi similar h
// fetch use 
document.querySelector('button').addEventListener('click', () => {
  fetch('https://api.github.com/users/async')
    .then((raw) => raw.json())
    .then((data => {
      console.log(data);

    }))

})

function getUserInfo(username) {
  return fetch(`https://api.github.com/users/${username}`).then((raw) =>
    raw.json()
  )
}
getUserInfo('async').then(function (data) {
  console.log(data);

})
