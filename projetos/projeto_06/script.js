let tarefas = []
let contadorId = 0

let inputText = document.querySelector(".inputText")
let btnEnviar = document.querySelector(".btnEnviar")
let lista = document.querySelector(".lista")


// adicionar um inputText.maxLength = 5 aqui
//colocar um let posicaoLetra !!!!! 1 

// caso aperte o botao (btn)
btnEnviar.addEventListener("click", function(){
    adicionarTarefa()
})


////keydown : tecla apertada   event: variavel q guarda a tecla precionada
inputText.addEventListener("keydown", function(event){
    ///key : diz qual tecla foi precionada
    if (event.key === "Enter"){
        adicionarTarefa()
    }
})

function adicionarTarefa() {

    // trim: retira os espaços (se o usuario tentar enviar espaço dentro da palavra, bloqueara) 
    let texto = inputText.value.trim()

    if (texto !== "" ) {
        contadorId++
        tarefas.push({id: contadorId, tarefas: texto, concluido: false})
        inputText.value = ""
        renderizar()
    }
}

function renderizar() {

    // o innerb apaga oq estiver dentro da div
    lista.innerHTML = ""
    tarefas.forEach(function(item){
        let li = document.createElement("li")

        //apaga a palavra anterio e coloca a atual no lugar
        li.textContent = item.tarefas

        //colococa oq foi digitado dentro da div lista (mosta oq foi digitado)
        lista.appendChild(li)

        let btnExcluir = document.createElement ("button")
        btnExcluir.innerText = "❌"
        li.appendChild(btnExcluir)
        btnExcluir.addEventListener("click", function(e){
            e.stopPropagation()

            tarefas = tarefas.filter (function(t){
                return t.id !== item.id
            })
            renderizar()
        })
    })
}