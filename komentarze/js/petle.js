for (var i=10 ; i>0 ; i--) {
    'use strict';
    console.log(i);
}

for (var i=1 ; i<=5 ; i++) {
    console.log(i);
}

/*petla forEach*/
var tablica = ["Krystian", "Monika", "Danuta"];

for (var i=0; i<3; ++i) {
    console.log("Element z Indexem: " + i + " ma wartość " + tablica[i]);
}

var tablica = ["Krystian", "Monika", "Danuta", "Agata"];


for (var i=0; i<tablica.length; ++i) {
    console.log("Element z Indexem: " + i + " ma wartość " + tablica[i]);
}

var tablica = ["Krystian", "Monika", "Danuta", "Agata"];

tablica.forEach(function(element, index) {
                console.log("Element z Indexem: " + i + " ma wartość " + element);
                });

/*Pętla while*/
var it = 0;
while (it<10) {
    console.log(it);
    it++;
}

/*Pętla do wile*/

var iter = 20;
do {
    console.log(iter);
    iter++;
} while (iter < 10)
    
/*Przerywanie pętli*/
    var a = 0;

while (a<10) {
    console.log(++a);
    
    if (a == 5) {
        break;
    }
}

for ( var b = 0; b<10; ++b) {
    if (b==5) {
        continue;
    } else {
        console.log(b);
  }
    console.log("--");
}
