/*
O IMC (Índice de Massa Corporal) é um critério da Organização Mundial de Saúde para dar uma 
indicação sobre a condição de peso de uma pessoa

Fórmula do IMC:
        imc = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com
a tabela abaixo.

Condição IMC em adultos:
    - Abaixo de 18.5 - Abaixo do peso;
    - Entre 18.5 e 25 - Peso normal;
    - Entre 25 e 30 - Acima do peso;
    - Entre 30 e 40 - Obeso;
    - Acima de 40 - Obesidade grave

Imprima no console o resultado.
*/

const prompt = require('prompt-sync')();

function calculoIMC(pesoCorrigido, alturaCorrigida) {
    return pesoCorrigido / Math.pow(alturaCorrigida, 2);
}

function classificacaoIMC(imc) {
    if (imc < 18.5) {
        return 'Você está abaixo do peso ideal!'
    }
    else if (imc >= 18.5 && imc < 25) {
        return 'Você está no seu peso normal!'
    }
    else if (imc >= 25 && imc < 30) {
        return 'Você está acima do peso!'
    }
    else if (imc >= 30 && imc < 40) {
        return 'Você está obeso!'
    }else {
        return 'Você está com obesidade grave!'
    }
}

//função anônima - main
(function () {
let peso, altura;

peso = prompt("Digite seu peso em Kg: ").replace(",", ".");
    if(peso <= 0 || isNaN(peso) || !peso) {
        console.log("Entrada inválida! Digite apenas números, e se preciso colocar vírgula ou ponto no número decimal!");
        return calculoIMC();
    }

altura = prompt("Digite sua altura em metros: ").replace("," , ".");
    if(altura <= 0 || isNaN(altura) || !altura) {
        console.log("Entrada inválida! Digite apenas números, e se preciso colocar vírgula ou ponto no número decimal!");
        return calculoIMC();
    }

const pesoCorrigido = parseFloat(peso.replace("," , "."));
const alturaCorrigida = parseFloat(altura.replace("," , "."));
const imc = calculoIMC(pesoCorrigido, alturaCorrigida).toFixed(2);
console.log(`Seu IMC é: ${imc}\nClassificação: ${classificacaoIMC(imc)}`);
})();
