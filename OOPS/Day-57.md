💠kya h oops ?
object ko create krna jo ki sirf data hold na kre unki functionality bhi hold kare, aur aise object ko create karna with a blueprint model.
'

hum ek class bnayege us class se kai sare oobject banega ab wo har object kuch data hold krega and kuch funcinalities bhi hold krega jisko hum uske mathod kehte hai. ye sab manually na karna pade ki hum oops ke

class bnate h jisse nye object create kr sake
💠what is contructor ?
ager funtion ko kabhi bhi call karte waqt tumne new ka use kr liya to turant man mein ek blank object banao.

jab bhi funtion mein this ko dekho turant us blank object ko yaad karke us jagah rakhdo

function Ghar(){
this.room = "2bhk"
this.kamre=3
this.bathroom=2
}
let ghar1 = new Ghar()
💠 karna kya hota h isme ?

agr aap class ka use krte ho object bnane me to hum sabse pehle use krte h contructor

💠// Day 58 oops level 2

✔️prototype in oops
jab bi controctor bnaoge aur kuch aisa mil gya jo ki sabmain same hai kabhi bhi direct constructor mein bnana galat tarika hota h par shi tarika hai prototype ka use karna kyuki prototype mein save karne oar jitne bhi new ke sath instance banaaoge wo sare instance by default tumahri proto ki value k0 hold krega.

✔️✔️prototype ka use tab hota h jab apko ek value pure code me sabke liye chalana h
like : car h to apne sabhi car ki value 10lakh rakh di to ab model and size metter ni krta sabki price 10lakh hi h to ye condition me hum prototype ka use krte h jisse hum ek price prototype create kr le and vo program me use ho.
