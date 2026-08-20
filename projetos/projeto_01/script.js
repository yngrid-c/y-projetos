
// equaçao (ele cria a variavel com toda a equaçao dentro), quando chama a variavel mostra a resposta final
function criarTabuleiro(){

  //ponte ente html e js
  const tabuleiro = document.querySelector(".tabuleiro");

  //cria as fileira (as 6 tentativas)
  for (let c = 1; c <= 8; c++) {

    //cria as caixinhas (as 5 letras)
    for (let i = 1; i <= 8; i++) {

      //cE cria uma tag no html
      let casa = document.createElement("div");

      //cL interliga a tag (div = variavel casa) ao css, o add veste a roupa (permite q o usuario veja,as bordas/cores, etc)
      casa.classList.add("casa");

      //pega os quadradinhos feito coloca dentro das fileiras
      tabuleiro.appendChild(casa);
      

      //soma para os pares ficar preto
      if((c + i) % 2 == 0) {
        casa.classList.add("preto");
      }
    }
  }
}

criarTabuleiro();