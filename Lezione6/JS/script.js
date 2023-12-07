// Quando uso getElementById() tra le parentesi ci va l'id dell'elemento che voglio recuperare.
let demo = document.getElementById("demo");

// Voglio scrivere all'interno di demo.
// demo.innerHTML = "Ciao Nicolò.";

demo.innerHTML = "<h2> Ciao Nicolò. </h2>";

let feedback = document.getElementById("feedback");

feedback.innerHTML = "<h2> Ciao Christian. </h2>";

// Calcolatrice scema.

let dati = document.getElementById("dati");
let somma = document.getElementById("somma");
let differenza = document.getElementById("differenza");
let prodotto = document.getElementById("prodotto");
let quoziente = document.getElementById("quoziente");

// let numero1 = 12; 
// let numero2 = 4;
// Il problema è che tutto ciò che viene recuperato da un imput utente è considerato una stringa, quindi avrò problemi con le somme.

// Per risolvere questo problema devo fare il cast del dato, quindi forzarlo ad essere un numero.
let numero1 = Number( window.prompt("Inserisci il primo Numero") ) ;
let numero2 = Number( window.prompt("Inserisci il secondo Numero") ) ;


let risSomma = numero1 + numero2;
let risDifferenza = numero1 - numero2;
let risProdotto = numero1 * numero2;
let risQuoziente = numero1 / numero2;

// Devo stampare i risultati e i miei dati.
dati.innerHTML = "<h2> I numeri di partenza sono: " + numero1 + " e " + numero2 + "</h2>";
somma.innerHTML = "<p> La somma vale: " + risSomma + "</p>";
differenza.innerHTML = "<p> La differenza vale: " + risDifferenza + "</p>";
prodotto.innerHTML = "<p> Il prodotto vale: " + risProdotto + "</p>";
quoziente.innerHTML = "<p> Il quoziente vale: " + risQuoziente + "</p>";