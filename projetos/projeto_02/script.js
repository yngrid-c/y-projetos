const modal = document.querySelector(".modal");
const btnAbrir = document.querySelector(".btnAbrir");
const btnFechar = document.querySelector(".btnFechar");


//quando o usuario clicar vai mostrar o conteudo do function
btnAbrir.addEventListener("click", function(){

    //no css o modal ta em none( eixa tudo invisivel) mas quando aperta o isactive permite ver
    modal.classList.add("is-active");
});


//quando clicar vai fechar
btnFechar.addEventListener("click", function(){

    //vai remover oq foi oermitido eu ver
    modal.classList.remove("is-active");
});