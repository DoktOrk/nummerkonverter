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



QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("0"), "null", "Test" + 1 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("1"), "eins", "Test" + 2 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("2"), "zwei", "Test" + 3 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("10"), "zehn", "Test" + 4 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("11"), "elf", "Test" + 5 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("12"), "zwölf", "Test" + 6 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("13"), "dreizehn", "Test" + 7 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("20"), "zwanzig", "Test" + 8 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("21"), "einundzwanzig", "Test" + 9 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("100"), "einhundert", "Test" + 10 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("101"), "einhunderteins", "Test" + 11 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("1000"), "eintausend", "Test" + 12 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("11000"), "elftausend", "Test" + 13 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("12000"), "zwölftausend", "Test" + 14 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("13000"), "dreizehntausend", "Test" + 15 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("20000"), "zwanzigtausend", "Test" + 16 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("21000"), "einundzwanzigtausend", "Test" + 17 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("100000"), "einhunderttausend", "Test" + 18 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("1000000"), "eine Million ", "Test" + 19 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("1000001"), "eine Million eins", "Test" + 20 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("2000000"), "zwei Millionen ", "Test" + 21 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("2000001"), "zwei Millionen eins", "Test" + 22 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("11000000"), "elf Millionen ", "Test" + 23 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("11000001"), "elf Millionen eins", "Test" + 24 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("12000000"), "zwölf Millionen ", "Test" + 25 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("12000001"), "zwölf Millionen eins", "Test" + 26 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("13000000"), "dreizehn Millionen ", "Test" + 27 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("20000001"), "zwanzig Millionen eins", "Test" + 28 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("21000001"), "einundzwanzig Millionen eins", "Test" + 29 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("121000001"), "einhunderteinundzwanzig Millionen eins", "Test" + 30 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("1000000000"), "eine Milliarde ", "Test" + 31 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("1000000001"), "eine Milliarde eins", "Test" + 32 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("2000000001"), "zwei Milliarden eins", "Test" + 33 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("2020012001"), "zwei Milliarden zwanzig Millionen zwölftausendeins", "Test" + 34 + ": Passed!");
});

QUnit.test("nummerkonverter EinzeltestGruppe1", function(assert) {
        assert.equal(numKonverter("9999999999"), "neun Milliarden neunhundertneunundneunzig Millionen neunhundertneunundneunzigtausendneunhundertneunundneunzig", "Test" + 35 + ": Passed!");
});

