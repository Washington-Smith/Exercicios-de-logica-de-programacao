// Desencolva um programa que receba a idade de um usuário e verifique se o usuário já pode votar.

function votar(name, y) {
    const nome = name;
    let idade = y;
    idade = Number(idade);

    if (idade > 0) {
        if (idade < 18) {
            console.log(`Olá ${nome}, verifiquei e você não está apto para votar!`)

        } else {

            if (idade >= 18 && idade <= 60) {
                console.log(`Olá ${nome}, verifiquei e você está apto para votar!`)
            }
            else {
                console.log(`Olá ${nome}, verifiquei e você está apto para votar, porém é de sua escolha devido a sua idade.!`)
            }

        }

    } else {
        console.log(`Olá ${nome}, houve um erro na sua idade verifique, por favor!`)
    }
};


votar('washington', 21)