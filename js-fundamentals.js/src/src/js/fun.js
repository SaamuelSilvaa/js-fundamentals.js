/*

//metodo lenght, contador de caracteres em arrays e strings
const fullName = 'Samuel Ribeiro da Silva'

console.log(fullName.length, 'conta letras')

//Array

const fruits = ['maca', 'pessego', 'uva','pera']
console.log(fruits.length, 'array') //lenght conta
console.table(fruits[fruits.length -1]) //tabela index chamando ultimo item



const cortaNome = fullName.slice(1, 5)
console.log(cortaNome)




const fullName = 'Samuel Ribeiro da Silva'
const transformToArray = fullName.split(' ')
console.log(transformToArray)

const lastName = transformToArray[transformToArray.length -1]
console.log(lastName)




//funcao que pagur o primeiro nome e dê olá

function FirstName(fullName) {

if (fullName.length <= 0){
    return console.error('Defina uma nome:')
}

    let name = fullName.split(' ')[0]

    return `Ola ${name}, seja bem-vindo`
} 

console.log(FirstName('Samuel Ribeiro da Silva'))


*/

function getIMC(Peso, Altura) {

let imc = Peso / (Altura * Altura)

if(imc <= 18.5){
    console.log(`IMC ${imc} considerada abaixo do normal`)
}else (imc > 18.5 && imc <= 24.99){
    console.log(`IMC ${imc} considerada normal`)

}else if (imc >= 25 && <= 29.99) {
    console.log(`IMC ${imc} considerada acima do normal`)
}

}



getIMC(65, 1.75).toFixed(2)