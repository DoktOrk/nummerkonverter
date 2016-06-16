var testStringBox = {
    0: ["0", "1", "2", "10", "11", "12", "13", "20", "21", "100", "101", "1000", "11000", "12000", "13000", "20000", "21000", "100000", "1000000", "1000001", "2000000", "2000001", "11000000", "11000001", "12000000", "12000001", "13000000", "20000001", "21000001", "121000001", "1000000000", "1000000001", "2000000001", "2020012001", "9999999999"],
    1: ["null", "eins", "zwei", "zehn", "elf", "zwölf", "dreizehn", "zwanzig", "einundzwanzig", "einhundert", "einhunderteins", "eintausend", "elftausend", "zwölftausend", "dreizehntausend", "zwanzigtausend", "einundzwanzigtausend", "einhunderttausend", "eine Million ", "eine Million eins", "zwei Millionen ", "zwei Millionen eins", "elf Millionen ", "elf Millionen eins", "zwölf Millionen ", "zwölf Millionen eins", "dreizehn Millionen ", "zwanzig Millionen eins", "einundzwanzig Millionen eins", "einhunderteinundzwanzig Millionen eins", "eine Milliarde ", "eine Milliarde eins", "zwei Milliarden eins", "zwei Milliarden zwanzig Millionen zwölftausendeins", "neun Milliarden neunhundertneunundneunzig Millionen neunhundertneunundneunzigtausendneunhundertneunundneunzig"]
};

QUnit.test("nummerkonverter test1", function(assert) {
    for (var i = 0; testStringBox[0].length > i; i++){
        assert.equal(numKonverter(testStringBox[0][i]), testStringBox[1][i], "Test" + (i+1) + ": Passed!");
    }
});


var negativeTestStringBox = {
    0: ["222222.22222", "222222,22222", "43a543", "00000000001"],
    1: ["zweihundertzweiundzwanzigtausendzweihundertzweiundzwanzig", "zweihundertzweiundzwanzigtausendzweihundertzweiundzwanzig", "false", "eins"]
};

QUnit.test("nummerkonverter negative test1", function(assert) {
    for (var i = 0; negativeTestStringBox[0].length > i; i++){
        assert.equal(numKonverter(negativeTestStringBox[0][i]), negativeTestStringBox[1][i], "Negative test" + (i+1) + "!");
    }
});
