function termoFinal () {
    const termo = document.querySelector (".termo")

    for (let c = 1; c <= 6; c++) {
        for (let i = 1; i <= 5; i++) {
            let quadrado = document.createElement ("div")

            quadrado.classList.add ("quadrado")

            termo.appendChild (quadrado)
        }
    }   
}

termoFinal()

const senhaCorreta = "jogos"
let btnE = document.querySelector (".btnEnviar")

btnE.addEventListener ("click", function(){
    verificar()
})

function verificar (){
    let input = document.querySelector (".inputText")
    let inputValue = input.value

    let senha = document.querySelectorAll(".quadrado")

    for (let i = 0; i < 5; i++){
        let num = senha[i]
        num.classList.remove("certo", "erro", "meioCerto")
        num.textContent = inputValue[i]

        if (inputValue[i] == senhaCorreta[i]){
            num.classList.add("certo")
        } 

        else if (
            inputValue[i] == senhaCorreta[0] || 
            inputValue[i] == senhaCorreta[1] || 
            inputValue[i] == senhaCorreta[2] || 
            inputValue[i] == senhaCorreta[3] || 
            inputValue[i] == senhaCorreta[4]
        ) {
            num.classList.add("meioCerto")
        }

        else {
            num.classList.add("erro")
        }
    }
}