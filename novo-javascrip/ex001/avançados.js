 //avançando em javascript

 //manipulação de arrays

 const frutas =["maça","banana"]

 //para adicionar elemento no começo do array posso utilizar

 frutas.unshift("morango")

 console.log(frutas)

 //para remover o primeiro elemento no array e 

 frutas.shift()

 console.log(frutas)


 // map ,fliter ,reduce -> arrow function

 const numeros =[1,2,3,4,5,6,7,8,9,10]

 // o find => retorna o primeiro elemento do criteiro

const numeropar = numeros.find((num) => num % 2 === 0)

console.log(numeros)

console.log(numeropar)

// ja o filter => retorna todos os elementos que batem com o criteiro

const numerospares =numeros.filter((num)=>num % 2===0)

console.log(numerospares)
