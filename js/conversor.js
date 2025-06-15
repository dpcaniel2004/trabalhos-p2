function converterParaCelsius() {
    let entrada = parseFloat(document.getElementById("entrada").value);

    if (entrada < -459.67) {
        document.getElementById("saida").value = "Temperatura abaixo do zero absoluto. Tente outro valor.";
    } else {
        let saida = (entrada - 32) * (5/9);
        document.getElementById("saida").value = entrada + "°F = " + saida.toFixed(2) + "°C";
    }
}

function converterParaFahrenheit() {
    let entrada = parseFloat(document.getElementById("entrada").value);

    if (entrada < -273.15) {
        document.getElementById("saida").value = "Temperatura abaixo do zero absoluto. Tente outro valor.";
    } else {
        let saida = (entrada * (9/5)) + 32;
        document.getElementById("saida").value = entrada + "°C = " + saida.toFixed(2) + "°F";
    }
}