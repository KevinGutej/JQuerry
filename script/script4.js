// let width = 50;
// let height = 4;
// function tree() {
//     let result = width*height;
//     return result;
// }


// function tree( width, height) {
//     let multiplay = width*height;
//     let divide = width/height;
//     let result = `Wynik multiplay: ${multiplay}, Wynik divide ${divide}`
//     //`Wynik multiplay: ${multiplay}, Wynik divide ${divide}`
//     return result;
// }
// console.log(tree(4, 50));

// +    konkatenacji i dodawania
// -    odejonwania
// *    mnozenie
// /    dzielenie
// %    module      1/2 reszta z dzielenia
// =    przypisanie
// ==   sprawdza czy obie wartosci sa wuwne "1" == 1
// ===  sprawza czy obie wartosci sa ruwne, i sprawdza czy obie naja ten sam typ
// !=   sprawdza czy obie wartosci czy nie sa ruwne "2" != 1
// !==  sprawza czy obie wartosci nie sa ruwne, i sprawdza czy obie naja ten sam typ 2 !== 1

var add = 10;
var b = 15;
if (add == b) {
    //console.log("Prawda")
} else if(add < b) {
    //console.log("add <b")
} else {
    //console.log("False")
}
//document.write("False");

// var tekst = "tekst";
 var date = new Date();
// var hour = date.getHours();
// var day = date.getDay();
// var minutes = date.getMinutes();
// var seconds = date.getMilliseconds();
// var time = date.getTime();

//console.log("nasza data" + date);
// console.log("nasza godzin" + hour);
// console.log("nasz minuty" + minutes)
// console.log("nasza sekundy" + seconds)
// console.log("nasza dzien to " + day);
// console.log("czas od 1970 roku" + time);
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(tekst.toString());
// console.log(date.getFullYear());

var today = new Date();
var year = today.getFullYear(); //2021
var est = new Date('Apr 16, 1996 15:55');
var difference = today.getTime() - est.getTime();
//console.log(difference)
difference = Math.floor(difference/31556900000);
//console.log(difference)
//355*24*60*60*1000
