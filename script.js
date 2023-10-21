const jmeno = "Vladka"
const prijmeni = "Vrana"

document.body.innerHTML += "<h1>" + jmeno + "</h1>"
document.body.innerHTML += "<h2>" + jmeno + "</h2>"

//cviceni z lekce 01 - zkousim verzovat a posilat do repozitare

let pocetHodin = 7
let hodinovaSazba = 320
let pocetDnu = 21
let denniMzda = pocetHodin * hodinovaSazba
let plat = denniMzda * pocetDnu


document.body.innerHTML += plat + "<br>"

let vyplata = 47040
let pausal = 47040 * 0.6
let zakladDane = vyplata - pausal
let dan = zakladDane * 0.15

document.body.innerHTML += Math.floor(dan) + "<br>"