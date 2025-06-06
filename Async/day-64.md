💠 Async js lets start

js a code hamesha vo 2 type ka ho sakta hai, synchronous and assynchronous
sync
aysnc
ho sakta h
jha pr ⏭️
promies
setinterval
settimeout
async await
callbacks
to aisa code async kehlata h ✔️

apka code sabse pehle synchronous code chalta h isko js chalata hai main therad pe , kyuki js single thereded hai uska likha hua code chalnna chalu hota hai pahle thread occupy hojaata hai, aur main thread pe humesha sabse pehle poora synchronous code chalega , jab ye pura code finish hoga tab jakar async code ke chalne ki bari ayegi

js single theraded -> js ek opration hi ek time pr kr sakti hai.

✔️what is theads => apke processor me cores hote h har core ek time mein kai sare threads hote and her ek thread ek time par ek opreation perform kr sakta hai.

pillars
main thread => jaha pat sync code chalte hai sabse pahle.
main stack => jo bhi main stack par aayega wo hi chalega.

webAPI=>browser ki taref se kai sare features milte hai jo js mein nahi hote , wo features hum js main use to krte h pr vo js ka features ni hote co hume browser se milte hai.

//sync code main thread me chalna chalu ho jata h and async code ko webapi behind the scenes operate krna chalu kar deti h jab ye code complete hota tab ye code ka completion move ho jata hai callback queue. mein
callback queue=>

callback queue=>
macrotask queue=>

day 65 ⏭️

code have 2 type and
sync turant chalta
and asnyc code sync ke baad chalta h
async code sabse pehle jata h webAPis pe, jab waha par ye resolve ho jata h tab ye code jata h callback queue and fir event loop check krta hai main therad mein calll stack khali hua ya ni or hua to main therad me un stacks pr reh rhe excutiion context execute krta h.
