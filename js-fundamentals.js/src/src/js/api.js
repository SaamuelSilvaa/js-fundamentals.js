/*

fetch('https://viacep.com.br/ws/05863090/json/')
// primeiro then traz a respota da API (nao tem console log no primeiro then)

.then(response => {
   return response.json()
})

.then(data => {
    console.log( 'DATA',data)
})


// retorna o erro

.catch(error => console.error('Error:' , error))



function getCEP(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    //informações da API, exemplo:status,headers
        .then(res => res.json())
        //retorna os dados, o que eu solicitei
        .then(data => console.log(data))
        //retorna o erro
        .catch(error => console.error('Error', error))

}

getCEP('05863240')

*/

/*
function getPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => res.json())
        .then(data => {
            const { name, sprites, weight } = data

            const description = `Nome: ${name}, Peso: ${weight}, link da foto: ${sprites.front_default}`;
            console.log(description)
        })
        .catch(error => console.error('Error', error))

}

getPokemon('mewtwo')

*/

function getPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => res.json())
        .then((data) => {
            const { name, sprites, weight } = data;
            const div = document.getElementById('pokemon-info')

            div.innerHTML = `
            <h2>${name}</h2>
            <img src="${sprites.front_default}" alt="">
            <p> ${weight}</p>
            `

        })
        .catch(error => console.error('Error', error))

}

getPokemon('hitmonlee')










/*
function getProducts(products) {
    fetch (`https://fakestoreapi.com/${products}/1`)
    .then(res => res.json())
    .then (data => {
        const {title,price,image} = data
        const info = `Título: ${title}, Preço: ${price},Imagem:${image}`
})

.catch(error => console.error('Error', error))
}
getProducts('celular')
*/