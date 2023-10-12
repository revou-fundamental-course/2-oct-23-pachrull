document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("temperature-form");
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const conversionResult = document.getElementById("conversion-result");
    const explanation = document.getElementById("explanation");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (isNaN(temperature)) {
            conversionResult.textContent = "Input tidak valid!";
            explanation.textContent = "";
            return;
        }

        if (unit === "celsius") {
            const fahrenheit = (temperature * 9/5) + 32;
            conversionResult.textContent = `${temperature} Celsius = ${fahrenheit.toFixed(2)} Fahrenheit`;
            explanation.textContent = "Untuk mengonversi dari Celsius ke Fahrenheit, kalikan dengan 9/5 dan tambahkan 32.";
        } else if (unit === "fahrenheit") {
            const celsius = (temperature - 32) * 5/9;
            conversionResult.textContent = `${temperature} Fahrenheit = ${celsius.toFixed(2)} Celsius`;
            explanation.textContent = "Untuk mengonversi dari Fahrenheit ke Celsius, kurangkan 32 dan kalikan dengan 5/9.";
        }
    });
});
