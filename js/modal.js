/*neste script dei vida ao modal, com estas duas funções, uma para abrir e a outra para fechar*/
/*está função irá abrir o modal, jogando sua posição do top, para 0, o fazendo "descer"*/
function abrirModal() {
    document.getElementById('modal').style.top = "0";
    
}

/*já está irá fecha-lo, jogando novamento sua posição do top para -110%*/ 
function fecharModal() {
    document.getElementById('modal').style.top = "-110%";
}