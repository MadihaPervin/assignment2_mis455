function displayTemperatureMessage() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let message;
    if (temperature < 0) {
        message = "Freezing";
    } else if (temperature <= 10) {
        message = "Very Cold";
    } else if (temperature <= 20) {
        message = "Cold";
    } else if (temperature <= 30) {
        message = "Normal";
    } else if (temperature <= 40) {
        message = "Hot";
    } else {
        message = "Very Hot";
    }
    console.log(message);
}