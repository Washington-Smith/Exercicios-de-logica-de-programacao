// Desenvolver uma função que receba dois valores do tipo number e execute as quatro operações básicas e imprima o resultado.


function operações(x, y) {
    let num1 = x;
    let num2 = y;

    soma = num1 + num2;
    subtracao = num1 - num2;
    multiplicacao = num1 * num2;
    divisao = num1 / num2;

    return console.log(`O resultado das operações de soma, subtração, multiplicação e divisão são, respectivamente, ${soma}, ${subtracao}, ${multiplicacao} e ${divisao}!`)
};


operações(10, 5);
