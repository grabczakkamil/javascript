'use strict'

var liczba1 = 13, liczba2 = 5;

var wynik;

wynik = liczba1 % liczba2;
console.log(wynik);

console.log(--wynik);

//wynik = wynik + 3;
wynik += 3;
console.log(wynik);


if (wynik == 7) {
    console.log("PRAWDA");
} else {
    console.log("FAŁSZ");
}

if ("2" == 2) {
    console.log("prawda");
}
else {
    console.log("Nie prawda");
}

if ("2" === 2) {
    console.log("prawda");
}
else {
    console.log("Nie prawda");
}

if ("2" !== 2) {
    console.log("prawda");
}
else {
    console.log("Nie prawda");
}


if (!(("2" !== 2) && (8<4))) {
    document.write("<br> prawda");
}
else {
    document.write("<br> fałsz")
}

(3>2) ? console.log("prawda"): console.log("fałsz");