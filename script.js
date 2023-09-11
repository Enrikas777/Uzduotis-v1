// 1 variantas (be pristatymo)

var kaina = prompt("Įveskite prekės kainą")
kaina = Number(kaina)

 if(kaina) {
    console.log("Prekės kainą: " + kaina.toFixed(2) + " €")

 } else if(kaina == "" || isNaN(kaina)){
    console.log("Neįrašėte jokio skaičiaus.")

    while(isNaN(kaina)){
        var kaina = prompt("Įveskite prekės kainą")
    }
 } 

var pristatymas = prompt("Ar reikalingas pristatymas įnamus? (taip/ne)")


 console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
  

// 2 variantas (su pristatymu) 

do {

    var kaina = prompt("Įveskite prekės kainą")
    kaina = Number(kaina)
    var pristatymas = kaina * 0.05
    var išViso = kaina + pristatymas 

} while (isNaN(kaina) || kaina == "")


console.log("Prekės kaina: " + kaina.toFixed(2) + " €")
console.log("Pristatymas: " + pristatymas.toFixed(2) + " €")
console.log("Iš Viso " + išViso.toFixed(2) + " €")

var pristatymas = prompt("Ar reikalingas pristatymas įnamus? (taip/ne)")

 console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")

 var išViso = prompt("Į kurį miestą reiks pristatyti?")

 console.log("Prekę pristatysime į Kaunas per 1-3 dienas.")




