const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

//CALLBACKS / PRATICA GUIADA 1

//A

const listaNumeros = [1,2,3,4,5,6,7,8,9,10]

function funcaoA(array){
  const triplo = [];
  for(let valor of array){
  triplo.push(valor*3)
  };
  return triplo
}

console.log(funcaoA(listaNumeros))


//B

//FOR IN DEVOLVE O "INDEX" --- FOR OF DEVOLVE O 'INTEM'
function funcaoB(array){
  const pares = [];
  for(let valor of array){
    if(valor%2 === 0){
      pares.push(valor);
    }
  }
  return pares
}
console.log(funcaoB(listaNumeros))


//C

function funcaoC(array, callback){
  const result = callback (array)

  console.log(result)
}
funcaoC (listaNumeros, funcaoA)


//PRATICA GUIADA 2 / MAP() // O MAP É UMA FUNÇÃO DE ARRAY E RECEBE UMA CALLBACK "FUNÇÃO"

const returnMap = listaNumeros.map((item)=>{return item*3}) //O MAP PODE RECER ÍTEM, INDEX E ARRAY
console.log("x3", returnMap)

const returnMap2 = listaNumeros.map(item=>item*4)
console.log("x4", returnMap2)

const returnMap3 = pokemons.map(item=>item.nome)
console.log("Nome pokemons - MAP", returnMap3)

const returnMap4 = pokemons.map(item =>{return item.vida})
console.log("Vida pokemons - MAP", returnMap4)

const returnMap5 = pokemons.map(item =>item.tipo)
console.log("Tipo pokemons - MAP", returnMap5)


//PRATICA GUIADA 3 / FILTER() /TAMBÉM USADO COM ARRAYS E RECEBE DENTRO DELE UM CALBACK "FUNÇÃO" / RETORNA APENAS RESULTADOS VERDADEIROS DEPOIS DA FILTRAGEM

const returnFilter = listaNumeros.filter((item)=>{return item %2 === 0;}) //RECEBE ITEM, INDEX E ARRAY
console.log("Return filter", returnFilter)


const returnFilterP = pokemons.filter(item =>{return item.tipo})
console.log("Return pokemons", returnFilterP)

//EXERCÍCIO DE FIXAÇÃO

console.log(pokemons)

//A

function listaPokemons(objeto){
  
  const copiaPokemons = {...objeto, vida: 100}

  return copiaPokemons
}
console.log ("Cópia pokemons vida 100", listaPokemons(pokemons[0]))



//B
const pokemonsVidaCheia = pokemons.map((listaPokemons))

console.log(pokemonsVidaCheia)

//C
const pokemonsFogo = pokemons.filter((item)=>{
  return item.tipo === "fogo"
})
console.log(pokemonsFogo)

const pokemonsFogo1 = pokemonsVidaCheia.filter((item)=>{
  return item.tipo === "fogo"
})
console.log("Pokemons de fogo vida cheia", pokemonsFogo)

