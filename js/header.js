function abrirMenu() {
  var elemento = document.getElementById("m-navlinks");

  if (elemento.style.display === "none") elemento.style.display = "flex";
  else elemento.style.display = "none";
}

const viewport = document.querySelector(".carrossel-viewport");
const slides = [...document.querySelectorAll(".carrossel-slide")];
const prev = document.querySelector(".carousel__btn.prev");
const next = document.querySelector(".carousel__btn.next");

function proximaImagem() {
  const w = viewport.clientWidth;

  let imgAtual = Math.round(viewport.scrollLeft / w);
  imgAtual = Math.min(slides.length - 1, imgAtual + 1);
  viewport.scrollTo({ left: imgAtual * w, behavior: "smooth" });
}

function imagemAnterior() {
  const w = viewport.clientWidth;

  let imgAtual = Math.round(viewport.scrollLeft / w);
  imgAtual = Math.max(0, imgAtual - 1);
  viewport.scrollTo({ left: imgAtual * w, behavior: "smooth" });
}

let tamanho = 0;

function alterarFontSize() {
  tamanho++;
  if (tamanho > 2) {
    tamanho = 0;
  }
  switch (tamanho) {
    case 0:
      document.documentElement.style.setProperty("--fs-p", "1.25rem");
      document.documentElement.style.setProperty("--fs-a", "1.25rem");
      break;
    case 1:
      document.documentElement.style.setProperty("--fs-p", "1.50rem");
      document.documentElement.style.setProperty("--fs-a", "1.50rem");
      break;
    case 2:
      document.documentElement.style.setProperty("--fs-p", "1.75rem");
      document.documentElement.style.setProperty("--fs-a", "1.75rem");
      break;
  }

  console.log(document.documentElement.style.getPropertyValue("--fs-p"));
}
