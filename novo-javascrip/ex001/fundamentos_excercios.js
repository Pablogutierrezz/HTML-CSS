//exercicos de fundamentos
// exercicio 1:ola mundo
//crie um scrip que imprima ola mundo no console

console.log('ola,mundo!')

// exercicio 2: conversão de tipos 

const meunumero ="123"

 const meunumerocovertido = Number(meunumero)

 console.log(meunumerocovertido)
 console.log(typeof meunumerocovertido)

 // excercicos 3: manipulação de strings 

 //dado uma string "javascript e incrivel", escreva um codigo de quantas letras tem

const minhastrings="javascript e incrivel"

const numerodecaractere =minhastrings.length

const numerodepalavras =minhastrings.split(" ").length

console.log(`o numero de caracteres e ; ${numerodecaractere}`)
console.log(`o numero de palavras e :${numerodepalavras}`)

//execercios de loops e array
// crie um array com cinco nomes .use o loop for para imprimir

const nome =["ana","maria","joao","pablo"]

for(let i = 0 ; i <nome.length; i++){
    console.log(nome[i])
}