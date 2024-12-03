
/*

//DECLARATIVAS

function Saudacao() {
    return console.log("Olá mundo !!")
}


Saudacao()

function Somar(numOne,numTwo) {
    return numOne + numTwo

}
console.log(Somar(10,30))

function Multiplicar(numOne,numTwo) {
    return numOne * numTwo

}
console.log(Multiplicar(8,15))


function MediaQuery () {

    const getWidhtScreen = window.innerWidth
    if(getWidhtScreen < 400){
        console.log('é mobile')
    }else if (getWidhtScreen > 400 && getWidhtScreen <780 ) {
        console.log('é tablet')
    }else {
        console.log('é desktop')
    }
}

//função estática 


function Salve( ){
    return console.log('salve, sou uma função estática!')
}
Salve()

function Saudacao(){
    return "Olá Mundo!"
}
console.log(Saudacao())


//função dinamica

function DynaSomar(a,b){
    return a + b
}
console.log(DynaSomar(10,16))




// funçao dinamica que mostra numeros impares e pares, usar -> ${função} <- dentro da crase com string  
function ParImpar (num) {

        if (num % 2 === 0){
            return `${num} é par`
        } else {
            return `${num} é impar`
        }
         
}

console.log(ParImpar(54))

function ShortName(fullName) {

    const splitName = fullName.split(' ')
    //[ 'Maria' , 'Jose' , 'dos' , 'Santos' ]
    const [firstName, ...rest] = splitName
    // [1, 2, 3 ,4] = [1,...rest] = [1, 2, 3]
    const lastName = rest[rest.length - 1]
//
    return console.log(`${firstName} ${lastName}`)

}

ShortName('Maria Jose dos Santos')


const name = 'Joao Maria Santos'
const transform = name.split(' ')

const [first, ...rest] = transform

console.log(transform)
console.log(first)
console.log(rest)


function VOrF(string) {
    if (string === true) {
        return 'Yes'
    } else {
        return 'No'
    } 
}
console.log(VOrF(true))



function VOrF(bool) {
    return bool ? 'Yes' : 'No'
}
    console.log(VOrF(false))



    function Age(idade){
        return idade >= 18 ? 'Voce é de maior' : 'Voce ainda nao pode'
    }
console.log(Age(19))
*/

//ANONIMAS

const exampleAnonimo = function() {
    console.log('sou uma função')
}
exampleAnonimo()


//ArrowFunction
const arrowFunction = () => {
    return console.log('Sou uma arrow function')
}
arrowFunction()