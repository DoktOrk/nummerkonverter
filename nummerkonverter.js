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
            0: ["", "ein", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "", "elf", "zwölf", "dreizehn", "vierzehn", "fünfzehn", "sechszehn", "siebzehn", "achtzehn", "neunzehn"],
            nn: ["", "zehn", "zwanzig", "dreizig", "vierzig", "fünfzig", "sechszig", "siebzig", "achtzig", "neunzig"],
            1: ["", "zehn", "undzwanzig", "unddreizig", "undvierzig", "undfünfzig", "undsechszig", "undsiebzig", "undachtzig", "undneunzig"]
        };
        
        function toSayOut (numStringCopy) {
            if (numStringCopy.length == 1){
                    if (numStringCopy[0] == 0){
                        stringedNumber = "null";
                    }else if (numStringCopy[0] == 1){
                        stringedNumber = "eins";
                    }else{
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                    }
                    
            }else if (numStringCopy.length == 2){
                    if (numStringCopy[0] == 1 && numStringCopy[1] == 0){
                        stringedNumber = "eins";
                    }else if(numStringCopy[0] == 1 && numStringCopy[1] == 1){
                        stringedNumber = "elf";
                    }else if(numStringCopy[0] == 2 && numStringCopy[1] == 1){
                        stringedNumber = "zwölf";
                    }else if(numStringCopy[0] == 0){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox.nn[numStringCopy[1]];
                    }else{
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox[1][numStringCopy[1]];
                    }
                
            }else if (numStringCopy.length == 3){
                    if (numStringCopy[0] == 1 && numStringCopy[1] == 0){
                        stringedNumber = "eins";
                    }else if(numStringCopy[0] == 1 && numStringCopy[1] == 1){
                        stringedNumber = "elf";
                    }else if(numStringCopy[0] == 2 && numStringCopy[1] == 1){
                        stringedNumber = "zwölf";
                    }else if(numStringCopy[0] == 0){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox.nn[numStringCopy[1]];
                    }else{
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox[1][numStringCopy[1]];
                    }
                
                    if ([numStringCopy[2]] != "0"){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[2]] + "hundert" + stringedNumber.slice(0);
                    }else{
                        stringedNumber = stringedNumber;
                    }
                    
            }else if (numStringCopy.length == 4){
                    if (numStringCopy[0] == 1 && numStringCopy[1] == 0){
                        stringedNumber = "eins";
                    }else if(numStringCopy[0] == 1 && numStringCopy[1] == 1){
                        stringedNumber = "elf";
                    }else if(numStringCopy[0] == 2 && numStringCopy[1] == 1){
                        stringedNumber = "zwölf";
                    }else if(numStringCopy[0] == 0){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox.nn[numStringCopy[1]];
                    }else{
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox[1][numStringCopy[1]];
                    }
                
                    if ([numStringCopy[2]] != "0"){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[2]] + "hundert" + stringedNumber.slice(0);
                    }else{
                        stringedNumber = stringedNumber;
                    }
                    
                    var stringedNumberTausend = "";
                    stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[3]] + stringedNumberTausend.slice(0);
                
                    if(stringedNumberTausend != ""){
                        stringedNumber = stringedNumberTausend + "tausend" + stringedNumber;
                    }   
                    
            }else if (numStringCopy.length == 5){
                    if (numStringCopy[0] == 1 && numStringCopy[1] == 0){
                        stringedNumber = "eins";
                    }else if(numStringCopy[0] == 1 && numStringCopy[1] == 1){
                        stringedNumber = "elf";
                    }else if(numStringCopy[0] == 2 && numStringCopy[1] == 1){
                        stringedNumber = "zwölf";
                    }else if(numStringCopy[0] == 0){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox.nn[numStringCopy[1]];
                    }else{
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox[1][numStringCopy[1]];
                    }
                
                    if ([numStringCopy[2]] != "0"){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[2]] + "hundert" + stringedNumber.slice(0);
                    }else{
                        stringedNumber = stringedNumber;
                    }
                    
                    var stringedNumberTausend = "";
                    if(numStringCopy[3] == 1 && numStringCopy[4] == 1){
                        stringedNumberTausend = "elf";
                    }else if(numStringCopy[3] == 2 && numStringCopy[4] == 1){
                        stringedNumberTausend = "zwölf";
                    }else if(numStringCopy[3] == 0){
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[3]] + stringedNumberTausend.slice(0);
                        stringedNumberTausend += numStringBox.nn[numStringCopy[4]];
                    }else{
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[3]] + stringedNumberTausend.slice(0);
                        stringedNumberTausend += numStringBox[1][numStringCopy[4]];
                    }
                    
                    if (stringedNumberTausend != ""){
                        stringedNumber = stringedNumberTausend + "tausend" + stringedNumber;
                    }else{
                        stringedNumberTausend = stringedNumberTausend;
                    }
                    
            }else if (numStringCopy.length == 6){
                    if (numStringCopy[0] == 1 && numStringCopy[1] == 0){
                        stringedNumber = "eins";
                    }else if(numStringCopy[0] == 1 && numStringCopy[1] == 1){
                        stringedNumber = "elf";
                    }else if(numStringCopy[0] == 2 && numStringCopy[1] == 1){
                        stringedNumber = "zwölf";
                    }else if(numStringCopy[0] == 0){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox.nn[numStringCopy[1]];
                    }else{
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox[1][numStringCopy[1]];
                    }
                
                    if ([numStringCopy[2]] != "0"){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[2]] + "hundert" + stringedNumber.slice(0);
                    }else{
                        stringedNumber = stringedNumber;
                    }
                
                    var stringedNumberTausend = "";
                    if(numStringCopy[3] == 1 && numStringCopy[4] == 1){
                        stringedNumberTausend = "elf";
                    }else if(numStringCopy[3] == 2 && numStringCopy[4] == 1){
                        stringedNumberTausend = "zwölf";
                    }else if(numStringCopy[3] == 0){
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[3]] + stringedNumberTausend.slice(0);
                        stringedNumberTausend += numStringBox.nn[numStringCopy[4]];
                    }else{
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[3]] + stringedNumberTausend.slice(0);
                        stringedNumberTausend += numStringBox[1][numStringCopy[4]];
                    }
                    
                    if ([numStringCopy[5]] != "0"){
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[5]] + "hundert" + stringedNumberTausend.slice(0);
                    }else{
                        stringedNumberTausend = stringedNumberTausend;
                    }
                    if (stringedNumberTausend != ""){
                        stringedNumber = stringedNumberTausend + "tausend" + stringedNumber;
                    }else{
                        stringedNumberTausend = stringedNumberTausend;
                    }
                
            }else if (numStringCopy.length == 7){
                    if (numStringCopy[0] == 1 && numStringCopy[1] == 0){
                        stringedNumber = "eins";
                    }else if(numStringCopy[0] == 1 && numStringCopy[1] == 1){
                        stringedNumber = "elf";
                    }else if(numStringCopy[0] == 2 && numStringCopy[1] == 1){
                        stringedNumber = "zwölf";
                    }else if(numStringCopy[0] == 0){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox.nn[numStringCopy[1]];
                    }else{
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox[1][numStringCopy[1]];
                    }
                
                    if ([numStringCopy[2]] != "0"){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[2]] + "hundert" + stringedNumber.slice(0);
                    }else{
                        stringedNumber = stringedNumber;
                    }
                
                    var stringedNumberTausend = "";
                    if(numStringCopy[3] == 1 && numStringCopy[4] == 1){
                        stringedNumberTausend = "elf";
                    }else if(numStringCopy[3] == 2 && numStringCopy[4] == 1){
                        stringedNumberTausend = "zwölf";
                    }else if(numStringCopy[3] == 0){
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[3]] + stringedNumberTausend.slice(0);
                        stringedNumberTausend += numStringBox.nn[numStringCopy[4]];
                    }else{
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[3]] + stringedNumberTausend.slice(0);
                        stringedNumberTausend += numStringBox[1][numStringCopy[4]];
                    }
                    
                    if ([numStringCopy[5]] != "0"){
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[5]] + "hundert" + stringedNumberTausend.slice(0);
                    }else{
                        stringedNumberTausend = stringedNumberTausend;
                    }
                    if (stringedNumberTausend != ""){
                        stringedNumber = stringedNumberTausend + "tausend" + stringedNumber;
                    }else{
                        stringedNumberTausend = stringedNumberTausend;
                    }
                
                    var stringedNumberMillion = "";
                    stringedNumberMillion = stringedNumberMillion.slice(0, 0) + numStringBox[0][numStringCopy[6]] + stringedNumberMillion.slice(0);
                
                    if (numStringCopy[6] == "1"){
                        stringedNumber = stringedNumberMillion + "e Million " + stringedNumber;
                        return true;
                    }else if(stringedNumberMillion != ""){
                        stringedNumber = stringedNumberMillion + " Millionen " + stringedNumber;
                        return true;
                    }
            
            }else if (numStringCopy.length == 8){
                    if (numStringCopy[0] == 1 && numStringCopy[1] == 0){
                        stringedNumber = "eins";
                    }else if(numStringCopy[0] == 1 && numStringCopy[1] == 1){
                        stringedNumber = "elf";
                    }else if(numStringCopy[0] == 2 && numStringCopy[1] == 1){
                        stringedNumber = "zwölf";
                    }else if(numStringCopy[0] == 0){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox.nn[numStringCopy[1]];
                    }else{
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox[1][numStringCopy[1]];
                    }
                
                    if ([numStringCopy[2]] != "0"){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[2]] + "hundert" + stringedNumber.slice(0);
                    }else{
                        stringedNumber = stringedNumber;
                    }
                
                    var stringedNumberTausend = "";
                    if(numStringCopy[3] == 1 && numStringCopy[4] == 1){
                        stringedNumberTausend = "elf";
                    }else if(numStringCopy[3] == 2 && numStringCopy[4] == 1){
                        stringedNumberTausend = "zwölf";
                    }else if(numStringCopy[3] == 0){
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[3]] + stringedNumberTausend.slice(0);
                        stringedNumberTausend += numStringBox.nn[numStringCopy[4]];
                    }else{
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[3]] + stringedNumberTausend.slice(0);
                        stringedNumberTausend += numStringBox[1][numStringCopy[4]];
                    }
                    
                    if ([numStringCopy[5]] != "0"){
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[5]] + "hundert" + stringedNumberTausend.slice(0);
                    }else{
                        stringedNumberTausend = stringedNumberTausend;
                    }
                    if (stringedNumberTausend != ""){
                        stringedNumber = stringedNumberTausend + "tausend" + stringedNumber;
                    }else{
                        stringedNumberTausend = stringedNumberTausend;
                    }
                
                    var stringedNumberMillion = "";
                    if(numStringCopy[6] == 1 && numStringCopy[7] == 1){
                        stringedNumberMillion = "elf";
                    }else if(numStringCopy[6] == 2 && numStringCopy[7] == 1){
                        stringedNumberMillion = "zwölf";
                    }else if(numStringCopy[6] == 0){
                        stringedNumberMillion = stringedNumberMillion.slice(0, 0) + numStringBox[0][numStringCopy[6]] + stringedNumberMillion.slice(0);
                        stringedNumberMillion += numStringBox.nn[numStringCopy[7]];
                    }else{
                        stringedNumberMillion = stringedNumberMillion.slice(0, 0) + numStringBox[0][numStringCopy[6]] + stringedNumberMillion.slice(0);
                        stringedNumberMillion += numStringBox[1][numStringCopy[7]];
                    }
                    if (stringedNumberMillion != ""){
                        stringedNumber = stringedNumberMillion + " Millionen " + stringedNumber;
                    }
              
            }else if (numStringCopy.length == 9){
                    if (numStringCopy[0] == 1 && numStringCopy[1] == 0){
                        stringedNumber = "eins";
                    }else if(numStringCopy[0] == 1 && numStringCopy[1] == 1){
                        stringedNumber = "elf";
                    }else if(numStringCopy[0] == 2 && numStringCopy[1] == 1){
                        stringedNumber = "zwölf";
                    }else if(numStringCopy[0] == 0){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox.nn[numStringCopy[1]];
                    }else{
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox[1][numStringCopy[1]];
                    }
                
                    if ([numStringCopy[2]] != "0"){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[2]] + "hundert" + stringedNumber.slice(0);
                    }else{
                        stringedNumber = stringedNumber;
                    }
                
                    var stringedNumberTausend = "";
                    if(numStringCopy[3] == 1 && numStringCopy[4] == 1){
                        stringedNumberTausend = "elf";
                    }else if(numStringCopy[3] == 2 && numStringCopy[4] == 1){
                        stringedNumberTausend = "zwölf";
                    }else if(numStringCopy[3] == 0){
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[3]] + stringedNumberTausend.slice(0);
                        stringedNumberTausend += numStringBox.nn[numStringCopy[4]];
                    }else{
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[3]] + stringedNumberTausend.slice(0);
                        stringedNumberTausend += numStringBox[1][numStringCopy[4]];
                    }
                    
                    if ([numStringCopy[5]] != "0"){
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[5]] + "hundert" + stringedNumberTausend.slice(0);
                    }else{
                        stringedNumberTausend = stringedNumberTausend;
                    }
                    if (stringedNumberTausend != ""){
                        stringedNumber = stringedNumberTausend + "tausend" + stringedNumber;
                    }else{
                        stringedNumberTausend = stringedNumberTausend;
                    }
                
                    var stringedNumberMillion = "";
                    if(numStringCopy[6] == 1 && numStringCopy[7] == 1){
                        stringedNumberMillion = "elf";
                    }else if(numStringCopy[6] == 2 && numStringCopy[7] == 1){
                        stringedNumberMillion = "zwölf";
                    }else if(numStringCopy[6] == 0){
                        stringedNumberMillion = stringedNumberMillion.slice(0, 0) + numStringBox[0][numStringCopy[6]] + stringedNumberMillion.slice(0);
                        stringedNumberMillion += numStringBox.nn[numStringCopy[7]];
                    }else{
                        stringedNumberMillion = stringedNumberMillion.slice(0, 0) + numStringBox[0][numStringCopy[6]] + stringedNumberMillion.slice(0);
                        stringedNumberMillion += numStringBox[1][numStringCopy[7]];
                    }
                    
                    if ([numStringCopy[8]] != "0"){
                        stringedNumberMillion = stringedNumberMillion.slice(0, 0) + numStringBox[0][numStringCopy[8]] + "hundert" + stringedNumberMillion.slice(0);
                    }else{
                        stringedNumberMillion = stringedNumberMillion;
                    }
                    if (stringedNumberMillion != ""){
                        stringedNumber = stringedNumberMillion + " Millionen " + stringedNumber;
                    }
              
            }else if (numStringCopy.length == 10){
                    if (numStringCopy[0] == 1 && numStringCopy[1] == 0){
                        stringedNumber = "eins";
                    }else if(numStringCopy[0] == 1 && numStringCopy[1] == 1){
                        stringedNumber = "elf";
                    }else if(numStringCopy[0] == 2 && numStringCopy[1] == 1){
                        stringedNumber = "zwölf";
                    }else if(numStringCopy[0] == 0){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox.nn[numStringCopy[1]];
                    }else{
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[0]] + stringedNumber.slice(0);
                        stringedNumber += numStringBox[1][numStringCopy[1]];
                    }
                
                    if ([numStringCopy[2]] != "0"){
                        stringedNumber = stringedNumber.slice(0, 0) + numStringBox[0][numStringCopy[2]] + "hundert" + stringedNumber.slice(0);
                    }else{
                        stringedNumber = stringedNumber;
                    }
                
                    var stringedNumberTausend = "";
                    if(numStringCopy[3] == 1 && numStringCopy[4] == 1){
                        stringedNumberTausend = "elf";
                    }else if(numStringCopy[3] == 2 && numStringCopy[4] == 1){
                        stringedNumberTausend = "zwölf";
                    }else if(numStringCopy[3] == 0){
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[3]] + stringedNumberTausend.slice(0);
                        stringedNumberTausend += numStringBox.nn[numStringCopy[4]];
                    }else{
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[3]] + stringedNumberTausend.slice(0);
                        stringedNumberTausend += numStringBox[1][numStringCopy[4]];
                    }
                    
                    if ([numStringCopy[5]] != "0"){
                        stringedNumberTausend = stringedNumberTausend.slice(0, 0) + numStringBox[0][numStringCopy[5]] + "hundert" + stringedNumberTausend.slice(0);
                    }else{
                        stringedNumberTausend = stringedNumberTausend;
                    }
                    if (stringedNumberTausend != ""){
                        stringedNumber = stringedNumberTausend + "tausend" + stringedNumber;
                    }else{
                        stringedNumberTausend = stringedNumberTausend;
                    }
                
                    var stringedNumberMillion = "";
                    if(numStringCopy[6] == 1 && numStringCopy[7] == 1){
                        stringedNumberMillion = "elf";
                    }else if(numStringCopy[6] == 2 && numStringCopy[7] == 1){
                        stringedNumberMillion = "zwölf";
                    }else if(numStringCopy[6] == 0){
                        stringedNumberMillion = stringedNumberMillion.slice(0, 0) + numStringBox[0][numStringCopy[6]] + stringedNumberMillion.slice(0);
                        stringedNumberMillion += numStringBox.nn[numStringCopy[7]];
                    }else{
                        stringedNumberMillion = stringedNumberMillion.slice(0, 0) + numStringBox[0][numStringCopy[6]] + stringedNumberMillion.slice(0);
                        stringedNumberMillion += numStringBox[1][numStringCopy[7]];
                    }
                    
                    if ([numStringCopy[8]] != "0"){
                        stringedNumberMillion = stringedNumberMillion.slice(0, 0) + numStringBox[0][numStringCopy[8]] + "hundert" + stringedNumberMillion.slice(0);
                    }else{
                        stringedNumberMillion = stringedNumberMillion;
                    }
                    if (stringedNumberMillion != ""){
                        stringedNumber = stringedNumberMillion + " Millionen " + stringedNumber;
                    }
                    
                    var stringedNumberMilliarde = "";
                    stringedNumberMilliarde = stringedNumberMilliarde.slice(0, 0) + numStringBox[0][numStringCopy[9]] + stringedNumberMilliarde.slice(0);
                    
                    if (numStringCopy[9] == "1"){
                        stringedNumber = stringedNumberMilliarde + "e Milliarde " + stringedNumber;
                        return true;
                    }else if(stringedNumberMilliarde != ""){
                        stringedNumber = stringedNumberMilliarde + " Milliarden " + stringedNumber;
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
