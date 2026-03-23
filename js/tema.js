let tema = localStorage.getItem("tema") || "light";

function iniciarTema() {
    document.body.dataset.theme = localStorage.getItem("tema");
    
    if(tema == "light") {
        document.getElementById("icone-botao-tema").src = "assets/img/icons/icone-sol-roxo.png";
    } else {
        document.getElementById("icone-botao-tema").src = "assets/img/icons/icone-lua-roxa.png";
    }
} 

function alterarTema() {
    tema = tema == "light" ? "dark" : "light"
    document.body.dataset.theme = tema;
    localStorage.setItem("tema",tema);

    if(tema == "light") {
        document.getElementById("icone-botao-tema").src = "assets/img/icons/icone-sol-roxo.png";
    } else {
        document.getElementById("icone-botao-tema").src = "assets/img/icons/icone-lua-roxa.png";
    }

}

document.getElementById("botao-trocar-tema").onclick = () => {
    alterarTema();
}

iniciarTema();