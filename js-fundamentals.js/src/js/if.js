/*
const age = 16

if(age >=18 && age <= 60) {
return console.log('Você é de maior !')
} else if (age === 17) { 
    return console.log ('Falata apenas um ano para você beber !')
}
else {
    
    return console.error('Você é de menor !')
} 
 */

const nota = 4

if (nota === 10) {
    return console.log('Passou com excelencia')
} else if (nota <= 9 &&  nota>=7) {
    return console.log('Passou !')
} else if(nota >= 4 && nota <= 6) {
    return  console.warn('Recuperação')
} else if  (nota <= 3) {
    return console.log ('Reprovado !')
} else {
    return console.error('Nota invalida')
}




