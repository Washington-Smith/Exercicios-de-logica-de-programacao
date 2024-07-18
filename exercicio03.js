// Desenvolva um programa que irá receber dois valores e verificar se um número é maior que outro.


function maiorNumero(x, y) {
    const num1 = x;
    const num2 = y;

    if (num1 !== num2) {
        if (num1 > num2) {
            console.log(`O valor ${num1} é maior que ${num2}.`)
        } else {
            console.log(`O valor ${num2} é maior que ${num1}.`)
        }
    } else {
        console.log(`Os valores informados são iguais.`)
    }
}

maiorNumero(7, 7)