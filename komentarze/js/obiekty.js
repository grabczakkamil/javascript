'use strict';

class Osoba {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    wyswietlInfo() {
        console.log("Nazywam się: " + this.imie + " " + this.nazwisko);
    }
}

var agata = new Osoba("Agata", "Biesaga");
var marcin = new Osoba("Marcin", "Kwiatkowski");

console.log(agata.imie);

console.log(agata);

console.log(marcin);

agata.wyswietlInfo();



//var kaja = {
//    imie: "Kaja",
//    wzrost: 152,
//    przedstawOsobe: function() {
//        console.log(this.imie);
//    }
//}
//
//var krystian = {
//    imie: "Krystian",
//    wzrost: 180,
//    przedstawOsobe: function() {
//        console.log(this.imie);
//    }
//}
//
//kaja.przedstawOsobe();
//krystian.przedstawOsobe();
//
//console.log(kaja.wzrost);
//console.log(kaja);


/*przykład z powtórzenia*/

var osoba = {
    imie:"Piotr",
    nazwisko:"Jachowicz",
    getFullName: function() {
        return this.imie + " " + this.nazwisko;
    }
}