// Converts celsius to fahrenheit
// (C * 9/5) + 32
function cTof() {
    var celsius = document.getElementById("c").value;
    var fahrenheit = ((celsius * 9/5) + 32).toFixed(5);
    document.getElementById("f").value = fahrenheit;

}

// Converts fahrenheit to celsius
// (F - 32) * 5/9
function fToc() {
    var fahrenheit = document.getElementById("f").value;
    var celsius = ((fahrenheit - 32) * 5/9).toFixed(5);
    document.getElementById("c").value = celsius;

}

// Converts kilograms to pounds
// kg * 2.2
function kgTolb() {
    var kg = document.getElementById("kg").value;
    var pounds = (kg * 2.2).toFixed(5);
    document.getElementById("lb").value = pounds;
}

// Converts pounds to kilograms
// lb / 2.2
function lbTokg() {
    var pounds = document.getElementById("lb").value;
    var kg = (pounds / 2.2).toFixed(5);
    document.getElementById("kg").value = kg;
}

// Converts kilometers to miles
// km * 0.62137
function kmTomi() {
    var km = document.getElementById("km").value;
    var miles = (km * 0.62137).toFixed(5);
    document.getElementById("mi").value = miles;
}

// Converts miles to km
// mi / 0.62137
function miTokm() {
    var mi = document.getElementById("mi").value;
    var km = (mi / 0.62137).toFixed(5);
    document.getElementById("km").value = km;
}

// Handles all conversions and error checking
function convert(id1, id2, func1, func2) {
    var input1 = document.getElementById(id1).value;
    var input2 = document.getElementById(id2).value;

    // Use the appropriate function and check for errors
    if(input1 && input2) {
        alert("Please only enter 1 value to be converted.");
    } else if(input1) {
        window[func1]();
    } else if(input2) {
        window[func2]();
    } else {
        alert("Please enter a value to convert.")
    }
}

// Clears the specified fields
function clear(id1, id2) {
    document.getElementById("c").value = "";
    document.getElementById("f").value = "";
}