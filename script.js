const tabuleiro = document.querySelectorAll(".casa");
let contador = 0;
let botao = document.querySelector("button");



for(casa of tabuleiro){
    casa.addEventListener("click", jogada);
}

function jogada(){
    contador++;
    if((contador % 2) == 0){
        this.innerHTML= "X";
    }
    else{
        this.innerHTML= "O";
    }
    this.removeEventListener("click", jogada);

    if(contador >= 5){
        verificar();
    }
}

function comparar(casa1, casa2, casa3){
    if(casa1.innerHTML === casa2.innerHTML && casa2.innerHTML === casa3.innerHTML && casa1.innerHTML !== ""){
        return true;
    }
    return false;   
}

function verificar(){
    if(comparar(tabuleiro[0], tabuleiro[1], tabuleiro[2]) ||
    comparar(tabuleiro[3], tabuleiro[4], tabuleiro[5]) ||
    comparar(tabuleiro[6], tabuleiro[7], tabuleiro[8]) ||
    comparar(tabuleiro[0], tabuleiro[3], tabuleiro[6]) ||
    comparar(tabuleiro[1], tabuleiro[4], tabuleiro[7]) ||
    comparar(tabuleiro[2], tabuleiro[5], tabuleiro[8]) ||
    comparar(tabuleiro[0], tabuleiro[4], tabuleiro[8]) ||
    comparar(tabuleiro[2], tabuleiro[4], tabuleiro[6])
   ){
       alert("Venceu!");
       this.removeEventListener("click", jogada);

   }
}


    function reset(){
        for(let i in tabuleiro){
            tabuleiro[i].innerHTML = '';
        }
        for(casa of tabuleiro){
            casa.addEventListener("click", jogada);
        }  
    }

    botao.addEventListener('click', reset);