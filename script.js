"use strict";
do {
  var kaina = prompt("Įveskite prekės kainą");
  var tikrinimas = Number(kaina);
  
  if(tikrinimas > 0){
    var pristatymas = confirm ("Ar reikalingas pristatymas į namus? (taip/ne)");
    if(pristatymas == true){
        var miestas = prompt("Į kurį miestą reiks pristatyti?");
      } else {
        var pabaiga = ("Prekės kaina: " + kaina + "€");
      }
  }
  var pristatymas = 5;
  var suma = tikrinimas + pristatymas; 
} while (isNaN(tikrinimas))

if(pabaiga) {
  console.log(pabaiga);
  console.log ("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
}
else {
    console.log("Prekės kaina: " + kaina + "€");
    console.log("Pristatymas: " + pristatymas + "€");
    console.log("Iš viso: " + suma + "€");
    console.log("Prekę pristatysime į " + miestas + " per 1-3 dienas");

}
