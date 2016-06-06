var testStringBox = {
    0: ["0", "1", "2", "10", "11", "12", "13", "20", "21", "100","101"],
    1: ["null", "eins", "zwei", "zehn", "elf", "zwölf", "dreizehn", "zwanzig", "einundzwanzig", "einhundert", "einhunderteins"]
};

QUnit.test("nummerkonverter test1", function(assert) {
    for (var i = 0; testStringBox[0].length > i; i++){
        assert.equal(numKonverter(testStringBox[0][i]), testStringBox[1][i], "Test" + (i+1) + ": Passed!");
    }
});