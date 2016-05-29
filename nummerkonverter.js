function numValidator(data){
    if (typeof data === "number" && !isNaN(data)){
        return true;
    };
}

var numKonverter = function(){
    var numString = prompt("Geben Sie bitte, eine Nummer von 0 bis 9999999999 ein! (Zahlensystem: 10)");
    var num = parseInt(numString, 10);
    if (numValidator(num) && numString.length <= 10){
        return alert("The converter comes here!");
    }else{
        alert("Die eingegebenen Daten sind ungültig!");
    }
};

numKonverter();
