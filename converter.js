// Converts celsius to fahrenheit
// (C * 9/5) + 32
function cTof() {
    var celsius = document.getElementById("c").value;
    var fahrenheit = ((celsius * 9/5) + 32).toFixed(2);
    document.getElementById("f").value = fahrenheit;

}

// Converts fahrenheit to celsius
// (F - 32) * 5/9
function fToc() {
    var fahrenheit = document.getElementById("f").value;
    var celsius = ((fahrenheit - 32) * 5/9).toFixed(2);
    document.getElementById("c").value = celsius;

}

// Converts kilograms to pounds
// kg * 2.2
function kgTolb() {
    var kg = document.getElementById("kg").value;
    var pounds = (kg * 2.2).toFixed(2);
    document.getElementById("lb").value = pounds;
}

// Converts pounds to kilograms
// lb / 2.2
function lbTokg() {
    var pounds = document.getElementById("lb").value;
    var kg = (lb / 2.2).toFixed(2);
    document.getElementById("kg").value = kg;
}

// Converts kilometers to miles
// km * 0.62137
function kmTomi() {
    var km = document.getElementById("km").value;
    var miles = (km * 0.62137).toFixed(2);
    document.getElementById("mi").value = miles;
}

// Converts miles to km
// mi / 0.62137
function miTokm() {
    var mi = document.getElementById("mi").value;
    var km = (mi / 0.62137).toFixed(2);
    document.getElementById("km").value = km;
}

// Handles all conversions and error checking
function convert(id1, id2, func1, func2) {
    var input1 = document.getElementById(id1).value;
    var input2 = document.getElementById(id2).value;

    // Both fields should not be filled out
    if(input1 && input2) {
        alert("Please only enter 1 value to be converted.");
    }

    // Use the appropriate function
    if(input1) {
        window[func1]();
    } else if(input2) {
        window[func2]();
    } else {
        alert("Please enter a value to convert.")
    }
}