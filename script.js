function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultDiv = document.getElementById("result");

    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
    let convertedTemperature;
    let unitLabel;

    if (isNaN(temperature)) {
        resultDiv.innerText = "Please enter a valid number.";
        return;
    }

    if (unit === "celsius") {
        convertedTemperature = (temperature - 32) * (5 / 9);
        unitLabel = "Celsius";
    } else if (unit === "fahrenheit") {
        convertedTemperature = (temperature * 9/5) + 32;
        unitLabel = "Fahrenheit";
    } else if (unit === "kelvin") {
        convertedTemperature = temperature + 273.15;
        unitLabel = "Kelvin";
    }

    resultDiv.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unitLabel}`;
}
