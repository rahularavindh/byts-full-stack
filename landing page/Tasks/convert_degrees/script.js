function convert() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    if (fahrenheit === "") {
        alert("Please enter a value in Fahrenheit.");
        return;
    }
    let celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("result").innerHTML = "Converted Value: "+celsius.toFixed(2) + " °C";
}