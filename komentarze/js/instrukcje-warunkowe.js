'use strict';
var wzrostMateusz = 190;
var wzrostOlgi = 190;

//if (wzrostOlgi < wzrostMateusz) {
//    console.log("Olga jest niższa :)");
//}

//if (wzrostOlgi < wzrostMateusz) {
//console.log("Olga jest niższa :)");
//}
//else {
//    console.log("Olga jest niższa");
//}

if (wzrostOlgi > wzrostMateusz) {
    console.log("Olga jest wyższa :)");
}
else if (wzrostOlgi == wzrostMateusz) {
    console.log("Olga tak wysoka jak Mateusz");
}
else {
    console.log("Olga jest niższa");
}

var kolor = 'zielony';

switch (kolor) {
case 'czerwony':
console.log('Kolor czerwony')
break;
case 'zielony':
console.log('Kolor zielony')
break;
case 'niebieski':
console.log('Kolor niebieski')
break;
default:
console.log('Inny kolor')
}