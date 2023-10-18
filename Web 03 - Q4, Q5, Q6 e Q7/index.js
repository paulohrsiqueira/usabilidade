function calculo() {
    var numero = document.getElementById("numero").value
    var total = numero / 2
    if (numero % 2 == 0) { alert("O número é par ") }
    else { alert("O número é ímpar") }

}

function calculoDecrescente() {
    var numero1 = Number(document.getElementById("numero1").value)
    var numero2 = Number(document.getElementById("numero2").value)
    var numero3 = Number(document.getElementById("numero3").value)
    var array = [numero1, numero2, numero3];
    array = array.sort((a, b) => b - a)
    array[0];
    array[1];
    array[2];
    alert("o maior é: " + array[0] + " o segundo maior é: " + array[1] + " o menor é: " + array[2])
}


function calculoPeso() {
    var altura = Number(document.getElementById("altura").value)
    var sexo = document.getElementById("sexo").value
    var pesoHomem = (72.7 * altura) - 58;
    var pesoMulher = (62.1 * altura) - 44.7;

    if (sexo == "masculino") {
        alert("O seu peso ideal é: " + pesoHomem)
    }
    else { alert("O seu peso ideal é: " + pesoMulher) }

}

function calculoValor() {
    var formaDePagamento = document.getElementById("formaDePagamento").value
    var valorProduto = 300
    if (formaDePagamento == "dinheiro") {
        alert("O valor total é: " + valorProduto + " O valor com desconto é: " + valorProduto * 0.9)

    } else if (formaDePagamento == "pix") {
        alert("O valor total é: " + valorProduto + " O valor com desconto é: " + valorProduto * 0.9)
    } else if (formaDePagamento == "cartaoDeCredito") {
        alert("O valor total é: "+valorProduto + " O valor com desconto é:"+valorProduto*0.95)

    } else if (formaDePagamento == "duasVezes") {
        alert("O valor total é:"+valorProduto + " O valor final a ser pago é: "+valorProduto)

    } else if (formaDePagamento == "tresVezes") {
        alert("O valor total é: "+valorProduto + " O valor total a ser pago é: "+valorProduto*1.06)

    }


}