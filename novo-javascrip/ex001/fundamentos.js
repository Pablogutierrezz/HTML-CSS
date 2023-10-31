//fudamentos
var p = "ola mundo";

console.log(p);

//variaveis e tipo de dados 

var n=10;
console.log(n)
console.log(n + 10)

//numeros sempre sem ("") exemplo

console.log("10" + 4)

//commo saber o tipo de dado

console.log(typeof n)

var meuobjeto={}
var meuarray=[]
var meunull=null;
var meuUdefined=undefined

console.log(typeof meuobjeto)
console.log(typeof meuarray)
console.log(typeof meunull)
console.log(typeof meuUdefined)

//let e const
// sao as novas formas de declarar variaves

 let x =15
 const y =30

 console.log(typeof x)
 console.log(x,y)

 // operadores aritmeticos

 console.log(x + y)
 console.log(x - y)
 console.log(x * y)
 console.log(x / y)

 //operadores de comparação

 console.log(x == y)
 console.log(x != y)

 console.log("5"==5) 
 console.log("5"===5)
 console.log("5"!==5)

 //operadores logicos
 //AND (&&)
 // OR (||)

 console.log(20>5 && 20>10)
 console.log(20>15 && 20>30)

 // OR se e falso se os dois tivereem errado 

 console.log(20>5 || 20>10)
 console.log(20>15 || 20>30)

 console.log(20>30 || 25>40)

 // conversao de tipos 5ww
 

 const meunumero ="123"
 
 const meunumerocovertido = Number(meunumero)

 console.log(meunumerocovertido)
 console.log(typeof meunumerocovertido )


// Estrutura de condição -if ,else,else if

let idade = 20

if(idade >20){
    console.log("adulto")
}
else if(idade >=13){
    console.log("adolecente")
}
else{
    console.log("criança")
}

//switch

const nacionalidade ="brasil"

switch(nacionalidade){
    case "brasil":
        console.log("voce e brasileiro")
        break;
    case "estados unidos":
        console.log("voce e americano")
        break;
    default:
        console.log("nacionalidade não econtrada")
}

// estrutura de repetição
// 1,2,3,4,5,6... => dependendo de uma condição
// a estrutura de um lup e rigida por um contado ,condiçao de limite ,incremendo
// existe tres opção de lups o primeiro e o 

let c=1

while (c <= 6) {
    console.log('ola')
    c++ // c++ significa que c=c+1 entao o c vai aumetar 1 a cada reptiçao
}
//estrutura de repetição com variavel de controle 
//e a segunda maneira de excutar uma estrutura de repetição e o
for( p=1 ; p<=6 ; p++ ) {
    console.log(p)

}


//funcoes
function parimp(n){
    if(n%2==0){
        return'par'
    }else{
        return'inpar'
    }
}

let res=parimp(11)
 console.log(res)
   
 function soma(n1,n2){
    return (n1+n2)
 }

 let s=soma(10,10)
 console.log(s)

 


