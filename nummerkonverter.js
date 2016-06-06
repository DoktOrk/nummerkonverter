function isNumber(data){
    if (typeof data === "number" && !isNaN(data)){
        return true;
    }
}

// noDecimals has no effect yet, since parseInt does its job, but later on can be needed, because there can be more than 10 digits
function noDecimals(data){
    if (Math.floor(data) === data){
        return true;
    }
}
// noDecimals has no effect yet, since parseInt does its job, but later on can be needed, because there can be more than 10 digits



var numKonverter = function(){
    var numString = prompt("Geben Sie bitte, eine natürliche Zahl von 0 bis 9999999999 ohne Dezimalstellen ein! (Zahlensystem: 10, Dezimalstellen und weitere Nummern werden ignoriert)");
    var num = parseInt(numString, 10);
    var stringedNumber = "";
    if (noDecimals(num) && isNumber(num) && num >= 0 && numString.length <= 10){
        
        var numRevertedToString = num.toString();
        var reverser = function(string) {
            return string.split("").reverse().join("");
        }
        var revertedToSayOut = reverser(numRevertedToString);
        
        var numStringBox = {
            0: ["", "ein", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", ""],
            nn: ["", "zehn", "zwanzig", "dreizig", "vierzig", "fünfzig", "sechszig", "siebzig", "achtzig", "neunzig"],
            1: ["", "zehn", "undzwanzig", "unddreizig", "undvierzig", "undfünfzig", "undsechszig", "undsiebzig", "undachtzig", "undneunzig"],
            2: ["null", "eins", "elf", "zwölf", "hundert", "tausend", "e Million ", " Millionen ", "e Milliarde ", " Milliarden "]
        };
        
        function toSayOut (numStringCopy) {
            var nSClength = numStringCopy.length;
            if (nSClength == 1){
                    if (numStringCopy[0] == 0){
                        stringedNumber = numStringBox[2][0];
                    }else if (numStringCopy[0] == 1){
                        stringedNumber = numStringBox[2][1];
                    }else{
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                    }
                    
            }else if(nSClength > 1){
                    if (numStringCopy[0] == 1 && numStringCopy[1] == 0){
                        stringedNumber = numStringBox[2][1];
                    }else if(numStringCopy[0] == 1 && numStringCopy[1] == 1){
                        stringedNumber = numStringBox[2][2];
                    }else if(numStringCopy[0] == 2 && numStringCopy[1] == 1){
                        stringedNumber = numStringBox[2][3];
                    }else if(numStringCopy[0] == 0){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox.nn[numStringCopy[1]];
                    }else{
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox[1][numStringCopy[1]];
                    }
                    
                    if (nSClength == 2){
                        return stringedNumber;
                    }
                
                    if ([numStringCopy[2]] != "0"){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[2]] + numStringBox[2][4] + stringedNumber.slice(0);
                    }else{
                        stringedNumber = stringedNumber;
                    }
                    
                    if (nSClength == 3){
                        return stringedNumber;
                    }
                
                    var stringedNumberTausend = "";
                    
                    if (nSClength == 4){
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[3]] + stringedNumberTausend.slice(0);
                            if(stringedNumberTausend != ""){
                                stringedNumber = stringedNumberTausend + numStringBox[2][5] + stringedNumber;
                            }else{
                                stringedNumber = stringedNumber;
                            }
                        return stringedNumber;
                    }
                    
                    if(numStringCopy[3] == 1 && numStringCopy[4] == 1){
                        stringedNumberTausend = numStringBox[2][2];
                    }else if(numStringCopy[3] == 2 && numStringCopy[4] == 1){
                        stringedNumberTausend = numStringBox[2][3];
                    }else if(numStringCopy[3] == 0){
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[3]] + stringedNumberTausend.slice(0);
                        stringedNumberTausend += numStringBox.nn[numStringCopy[4]];
                    }else{
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[3]] + stringedNumberTausend.slice(0);
                        stringedNumberTausend += numStringBox[1][numStringCopy[4]];
                    }
                    
                    if (nSClength == 5){
                        if (stringedNumberTausend != ""){
                            stringedNumber = stringedNumberTausend + numStringBox[2][5] + stringedNumber;
                        }else{
                            stringedNumberTausend = stringedNumberTausend;
                        }
                        return stringedNumber;
                    }
                    
                    if ([numStringCopy[5]] != "0"){
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[5]] + numStringBox[2][4] + stringedNumberTausend.slice(0);
                    }else{
                        stringedNumberTausend = stringedNumberTausend;
                    }
                    if (stringedNumberTausend != ""){
                        stringedNumber = stringedNumberTausend + numStringBox[2][5] + stringedNumber;
                    }else{
                        stringedNumberTausend = stringedNumberTausend;
                    }
                    
                    if (nSClength == 6){
                        return stringedNumber;
                    }
                
                    var stringedNumberMillion = "";
                    
                    if (nSClength == 7){
                        stringedNumberMillion = stringedNumberMillion.slice(0, 0) + numStringBox[0][numStringCopy[6]] + stringedNumberMillion.slice(0);
                        if (numStringCopy[6] == "1"){
                            stringedNumber = stringedNumberMillion + numStringBox[2][6] + stringedNumber;
                            return stringedNumber;
                        }else if(stringedNumberMillion != ""){
                            stringedNumber = stringedNumberMillion + numStringBox[2][7] + stringedNumber;
                            return stringedNumber;
                        }return stringedNumber;
                    }
                    
                    if(numStringCopy[6] == 1 && numStringCopy[7] == 1){
                        stringedNumberMillion = numStringBox[2][2];
                    }else if(numStringCopy[6] == 2 && numStringCopy[7] == 1){
                        stringedNumberMillion = numStringBox[2][3];
                    }else if(numStringCopy[6] == 0){
                        stringedNumberMillion = stringedNumberMillion.slice(0, 0) + numStringBox[0][numStringCopy[6]] + stringedNumberMillion.slice(0);
                        stringedNumberMillion += numStringBox.nn[numStringCopy[7]];
                    }else{
                        stringedNumberMillion = stringedNumberMillion.slice(0, 0) + numStringBox[0][numStringCopy[6]] + stringedNumberMillion.slice(0);
                        stringedNumberMillion += numStringBox[1][numStringCopy[7]];
                    }
                    
                    if (nSClength == 8){
                        if (stringedNumberMillion != ""){
                            stringedNumber = stringedNumberMillion + numStringBox[2][7] + stringedNumber;
                        }else{
                            stringedNumber = stringedNumber;
                        }
                        return stringedNumber;
                    }
                    
                    if ([numStringCopy[8]] != "0"){
                        stringedNumberMillion = stringedNumberMillion.slice(0, 0) + numStringBox[0][numStringCopy[8]] + numStringBox[2][4] + stringedNumberMillion.slice(0);
                    }else{
                        stringedNumberMillion = stringedNumberMillion;
                    }
                    if (stringedNumberMillion != ""){
                        stringedNumber = stringedNumberMillion + numStringBox[2][7] + stringedNumber;
                    }
                    
                    if (nSClength == 9){
                        return stringedNumber;
                    }
                    
                    var stringedNumberMilliarde = "";
                    stringedNumberMilliarde = stringedNumberMilliarde.slice(0, 0) + numStringBox[0][numStringCopy[9]] + stringedNumberMilliarde.slice(0);
                    
                    if (numStringCopy[9] == "1"){
                        stringedNumber = stringedNumberMilliarde + numStringBox[2][8] + stringedNumber;
                        return true;
                    }else if(stringedNumberMilliarde != ""){
                        stringedNumber = stringedNumberMilliarde + numStringBox[2][9] + stringedNumber;
                        return true;
                    }
                    
              
            }else{
                alert("Something went wrong. Detalis: " + numString + num + numRevertedToString + revertedToSayOut + numStringCopy + stringedNumber);
            }
        }
        
        toSayOut(revertedToSayOut);
        
        return alert("Die, von Ihnen eingegebene Nummer (" + num + ") lautet: " + stringedNumber + "!");
    }else{
        alert("Die eingegebenen Daten sind ungültig.");
    }
};



numKonverter();
