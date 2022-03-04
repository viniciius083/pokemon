export async function getAllPokemon(url){
    return new Promise( (resolve, reject) => {
        fetch(url).then( data => data.json()).then(data => {
            resolve(data)
        })
    })
}

export async function getPokemon(url){
    return new Promise( (resolve, reject) => {
        fetch(url).then( data => data.json()).then(data => {
            resolve(data)
        })
    })
}
