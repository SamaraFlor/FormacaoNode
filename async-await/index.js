function pegarUsuario() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            resolve([
                {name: "Samara",lang: "js"},
                {name: "Maria",lang: "java"},
                {name: "Ana",lang: "Phyton"},
                {name: "Carla",lang: "Go"}
            ])

        },3000)
   
    })
    
}

 async function principal() {
    var usuarios = await pegarUsuario()
    console.log(usuarios)
    
}

principal();