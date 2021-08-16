const msgdisplay = document.getElementById("msg-display")
var nome = setNome(imprimir_nome)
const ref = firebase.database().ref('message')

document.addEventListener("DOMContentLoaded", function(event){
    ref.on('child_added' , function(snapshot){
        imprimirMsg(snapshot.val().autor, snapshot.val().conteudo)
        console.log()
    })
})


function enviarMsg(){
    const msg_input =  document.getElementById('msg-input')
    var msg = {
        autor: nome,
        conteudo: msg_input.value
    }
    if(msg.conteudo != ''){
        ref.push().set(msg).then(()=>{
            console.log('Enviado!')
        })
    }else{
        console.log('Campo vazio!')
    }

}

function setNome(callback){
    nome = prompt("Escolha um nome:")
    if(nome.length < 2)
    {
        alert('Nome invalido!')
        setNome()
    }
    callback()
    return nome
}
function imprimir_nome(){
    //console.log(nome)
    return nome
}

function imprimirMsg(autor, conteudo){
    //console.log(autor + '/' + conteudo)
    let mensagem = document.createElement('span')
    let br = document.createElement('br')
    mensagem.innerHTML = `<strong>${autor}</strong>: ${conteudo}`
    msgdisplay.appendChild(mensagem)
    msgdisplay.appendChild(br)

}



