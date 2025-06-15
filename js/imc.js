function calcularIMC () {
    const nome = document.getElementById("nome").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (altura == 0 || isNaN(peso) || isNaN(altura) || nome == "") {
        document.getElementById("saida").value = "Digite os dados corretamente";
    } else {
        saida = peso / (altura * altura);

        if (saida < 18.5) {
            document.getElementById("saida").value = nome + ", seu IMC é: " + saida.toFixed(2) + "(Abaixo do peso). Procure ganhar peso com orientação nutricional.";
        } else if (saida >= 18.5 && saida <= 24.9) {
            document.getElementById("saida").value = nome + ", seu IMC é: " + saida.toFixed(2) + "(Peso ideal). Mantenha seus hábitos saudáveis!";
        } else if (saida >= 25 && saida <= 29.9) {
            document.getElementById("saida").value = nome + ", seu IMC é: " + saida.toFixed(2) + "(Sobrepeso). Ajustes na alimentação e exercícios podem ajudar.";
        } else if (saida >= 30 && saida <= 34.9) {
            document.getElementById("saida").value = nome + ", seu IMC é: " + saida.toFixed(2) + "(Obesidade Grau I). Considere um plano de reeducação alimentar.";
        } else if (saida >= 35 && saida <= 39.9) {
            document.getElementById("saida").value = nome + ", seu IMC é: " + saida.toFixed(2) + "(Obesidade Grau II). É importante buscar apoio médico e nutricional.";
        } else if (saida >= 40) {
            document.getElementById("saida").value = nome + ", seu IMC é: " + saida.toFixed(2) + "(Obesidade Grau III). Procure acompanhamento especializado com urgência.";
        }
    }
}