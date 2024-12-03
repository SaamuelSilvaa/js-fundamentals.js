/*

//loop

for (i = 0; i <= 5; i++) {
    console.log (i)

}


//Operador de adição - Incremento
let int = 1
//incremento pós
//incremento é int = int + 1 (int++)
console.log(int++, 'pós')

//incremento pré
console.log(++int,'pré')



//Operador de subtração - Incremento
let dec = 10
//incremento pós
//incremento é dec = dec - 1 (dec--)
console.log(dec--, 'pós')

//incremento pré
console.log(--dec,'pré')


for (i = 1; i <= 20; i++) {

if (i % 2 === 0){
    console.log(i,'é par')
} else {
    console.log(i,'é impar')
}

}



//array [] colchetes, objetos {} chaves



let object = {
    name: 'maria'
    age: 40
}



const products = [{
    name: 'Camisa',
    price: 25
}, {
    name: 'Calça',
    price: 60
}, {
    name: 'Chapéu',
    price: 15
}]


//percorre todos os objetos do array
for (let product of products) {
    console.log(product.name + ' custa ' + product.price + ' reais')}


let total = 0
//somas todos os prodtos e para
for (let product of products) {
    // "TOTAL+= É ---  "total = total + product.price (incrementação com resultado)
    total += product.price
}
console.log('A soma total dos produtos é: ' + total + ' reais')

*/
