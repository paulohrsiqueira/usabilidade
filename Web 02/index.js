
function calcularIdade() {
    var anoDeNascimento = document.getElementById("anoDeNascimento").value
    var anoAtual = document.getElementById("anoAtual").value
    var idadeAtual = anoAtual - anoDeNascimento
    var idade2050 = 2050 - anoDeNascimento

    alert("A sua idade atual é: " + idadeAtual + " A sua idade em 2050 vai ser: " + idade2050)

}

function calcularSalario() {
    var salarioAtual = document.getElementById("salarioAtual").value
    var salarioAumentado = (salarioAtual * 1.25)
    alert("O salário com 25% de aumento é: "+salarioAumentado)
}

function calcularTemperatura() {
    var temperatura = document.getElementById("temperatura").value
    var fahrenheit = temperatura * 1.8 + 32
    alert("Essa temperatura em Fahrenheit é: "+fahrenheit)
}

function calcularNotas(){
var nota1 = Number(document.getElementById("nota1").value)
var nota2 = Number(document.getElementById("nota2").value)
var nota3 = Number(document.getElementById("nota3").value)
var media = (nota1 + nota2 + nota3)/3
alert("A média final é: "+media)
}

function calcularHipotenusa(){
var cateto1 = Number(document.getElementById("cateto1").value)
var cateto2 = Number(document.getElementById("cateto2").value)
var hipotenusa = (Math.pow(cateto1, 2)) + (Math.pow(cateto2, 2))
alert("A hipotenusa é: "+hipotenusa)
}

function calcular(){
var raio = Number(document.getElementById("raio").value)
var comprimento = 2*(Math.PI)*raio
var area = (Math.PI)*(Math.pow(raio, 2))
var volume = (4*(Math.PI)*(Math.pow(raio, 3)))/3
alert("O valor do comprimento é: "+comprimento + "O valor da área é: "+area + "O valor do volume é: "+volume)
}
