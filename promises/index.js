// promise- promessa, contrato de algo
// email => Resolvida: "Ok" - Reject: "falha"
// save => Resolve : "Dados salvos" - Reject: "Ocorreu um erro"

function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)   
        },1500)
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("victorlima@guia.com.br")
        },2000);
    })
}

function enviarEmail(corpo,para){
    return new Promise((resolved,reject)=> {
        setTimeout(()=> {

            var deuErro = false;
            console.log("Email Enviado!")
            if (!deuErro) {
                resolved({time: 6,to: "samarafl2000@email.com"}) 
            }
            else{
                reject("Fila cheia") // Foi mal, eu falhei :(
            }
        },2000)
    })
};
 enviarEmail("ola ", "samara@gmail.com").then((dados)=> {
    console.log(  ` 
    time: ${dados.time}
    ---------------------------
    to: ${dados.to}
    ` )
 }).catch((erro)=>{
    console.log("Não deu certo", + erro)
 })

 function pegarUsuario() {
    return Promise((resolve,reject)=>{
        resolve([
            {name: "Samara", lang}
        ])


    })
    
 }

 console.log("Inicio!");
pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => { 
        enviarEmail("Olá, como vai?",email).then(() => {
            console.log("Email enviado, para o usuário com id: " + id)
        }).catch(err => {
            console.log(err);
        })
    })
})
console.log("FIM");


function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)   
        },1500)
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("victorlima@guia.com.br")
        },2000);
    })
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            var deuErro = true;
            if(!deuErro){
                resolve({time: 6, to: "victor@udemy.com"}) // Promessa OK!
            }else{
                reject("Fila cheia") // Foi mal, eu falhei :(
            }
        },4000)
    });
}


function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: "Victor", lang:"JS"},
                {name: "Lima", lang:"C#"},
                {name: "Daniel", lang:"Java"}
            ])
        },3000)
    })
}



async function principal(){
    var id = await pegarId();
    var email = await buscarEmailNoBanco(id);
    try{
        await enviarEmail("Olá, como vai?",email);
        console.log("Email enviado com sucesso!");
    }catch(erro){   
        console.log(erro);
    }
}


principal();