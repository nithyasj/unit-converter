// Converts celsius to fahrenheit
// (C * 9/5) + 32
function cTof() {
    var celsius = document.getElementById("c").value;
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("f").value = fahrenheit;

}

// Converts fahrenheit to celsius
// (F - 32) * 5/9
function fToc() {
    var fahrenheit = document.getElementById("f").value;
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("c").value = celsius;

}

// Converts kilograms to pounds
// kg * 2.2
function kgTolb() {
    var kg = document.getElementById("kg").value;
    var pounds = kg * 2.2;
    document.getElementById("lb").value = pounds;
}

// Converts pounds to kilograms
// lb / 2.2
function lbTokg() {
    var pounds = document.getElementById("lb").value;
    var kg = lb / 2.2;
    document.getElementById("kg").value = kg;
}

// Converts kilometers to miles
// km * 0.62137
function kmTomi() {
    var km = document.getElementById("km").value;
    var miles = km * 0.62137;
    document.getElementById("mi").value = miles;
}

// Converts kilometers to miles
// km * 0.62137
function kmTomi() {
    var km = document.getElementById("km").value;
    var miles = km * 0.62137;
    document.getElementById("mi").value = miles;
}