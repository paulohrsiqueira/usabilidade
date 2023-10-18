function calculateIMC() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!isNaN(weight) && !isNaN(height)) {
        const imc = weight / (height * height);
        const imcStatus = getIMCStatus(imc);

        document.getElementById("imcValue").textContent = imc.toFixed(2);
        document.getElementById("imcStatus").textContent = imcStatus;
        document.getElementById("result").style.display = "block";
    } else {
        alert("Por favor, insira valores vÃ¡lidos para peso e altura.");
    }
}

function getIMCStatus(imc) {
    if (imc < 20) {
        return "Abaixo do Peso";
    } else if (imc >= 20 && imc < 25) {
        return "Normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }
}