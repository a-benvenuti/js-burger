//  definisco le variabili
var variabileBtn = document.getElementById('btn_calcola');
var variabileBurgerName = document.getElementById('burger_name_input');
var variabileIngredienti = document.getElementsByClassName('add_ingredienti');
var variabileSconto = document.getElementById('sconto_input');
var variabileTotale = document.getElementById('total');
var arrayCodSconto = ["big20", "cheese20", "special20"];

// aggiungo evento click al bottone
variabileBtn.addEventListener("click",
  function () {
    // controlliamo se il nome è stato inserito
    if (variabileBurgerName.value != "") {
      // verifico se e quali ingredienti sono stati selezionati e in tal caso li sommo
      var somma = 50;
      for (var i = 0; i < variabileIngredienti.length; i++) {
        if (variabileIngredienti[i].checked == true){
          somma += parseInt(variabileIngredienti[i].value);
        }
      }
      // verifico se il codice sconto inserito è valido e in tal caso lo applico
      if (arrayCodSconto.includes(variabileSconto.value) == true) {
        somma -= somma * 0.2;
      }
      // stampo nel div total del mio html il totale da pagare
      somma = somma.toFixed(2);
      variabileTotale.innerHTML = somma + "€";
    } else {
      alert("Devi inserire il nome del tuo burger");
    }
  }
);
