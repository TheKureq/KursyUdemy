let prf = document.querySelector('.paragraf')
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')

//konstruktor obiektu
function Meal(nazwa, cena) {
    this.nazwa = nazwa,
    this.cena = cena
    this.rodzaj = 'fast-food'
}

//tworzenie obiektu
const Meal1 = new Meal('burger', 30)
const Meal2 = new Meal('burger1', 31)
const Meal3 = new Meal('burger2', 32)

//prorotyp
Meal.prototype.glos = function () {
    console.log(`Cześć ${this.nazwa} kosztuje ${this.cena}`)
}

Meal1.glos()
Meal2.glos()
Meal3.glos()

console.log(Meal1)
Meal1.alergen = 'migdal'
console.log(Meal1)

// btn1.addEventListener('click', function(){
//     console.log(this)
// })


