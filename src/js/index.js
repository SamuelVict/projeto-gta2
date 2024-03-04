/*

*/ 

// objetivo 1

// passo 1
const botao = document.querySelector(".btn-plataforma");

//passo 2
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

//passo 3
botao.addEventListener("click", () => {
    
    //objetivo 2
    elementoPlataformas.classList.toggle("ativo");
} );




