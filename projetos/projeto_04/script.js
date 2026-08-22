const senhaCorreta = "12345"
const btnEnviar = document.querySelector (".btnEnviar")

btnEnviar.addEventListener("click", function(){
    verificar()
})

function verificar() { 
    const input = document.querySelector (".inputSenha")

    //input é a caixa em q foi digitado
    //.value é oq foi digitado
    // crio uma var para guarda o conteudo q foi digitado
    let inputValue = input.value

    //ja tenho os quadrdados tudo oq tenho q fazer é usar querySelectoAll
    const senha = document.querySelector (".senha")
    for (let i = 0 ; i < 5; i++) {

        // sleceniona um dos quadrdado, coloco a variavel quadrado no lugar de senha.children ..., o [ i é uma dos 5 quadra]
        let number = senha.children[i]
        number.classList.remove("certo", "erro")

        //guarda dentro do quadrado apenas um dos digitos q foi citado
        number.textContent = inputValue[i]

        // os i significa 1 das letras da palavras, ta comparando um das letras q foi digitada com 1 letra da senha
        if(inputValue[i] == senhaCorreta[i]){
            number.classList.add("certo")
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
            number.classList.add("erro")
        }
    }

}

