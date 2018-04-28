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

/*powtórzenie nowy przykład*/

if (canBuyMachine(type, plec, zarobki))
    
    function canBuyMachine(type, plec,zarobki) {
return (type=='samochod' && plec == 'mezczyzna' && zarobki >100000) || plec == 'kobieta';
        
    }
    
/*przykład switcha*/
    switch(animal.type) {
        case 'cat':
            console.log('The best kind of animals');
            break;
        case 'bird':
            console.log('');
            break;
        case default:
            console.log('unsupported animal type');
    }

