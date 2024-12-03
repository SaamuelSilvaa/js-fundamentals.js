 const age = 17

switch(true){

    case age >= 18 && age <= 60:
         console.log('Você pode beber')
        break
case age === 17:
    console.log('Calma, falta apenas um ano !')
    break 

        default:
            console.log('Você não pode beber')
}


const nota = 12

switch (true) {
    case nota === 10:
    console.log('Passou com excelencia')
break

case nota <= 9 && nota >= 7:
    console.log('Passou')
break

case nota >= 4 && nota <= 6:
    console.log('Recuperação')
    break

    case nota <= 3:
        console.log('Reprovado !')
break

default:
    console.log('Nota invalida !')

}