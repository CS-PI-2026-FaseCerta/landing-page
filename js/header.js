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

let escala = 1;

function alterarFontSize() {
  escala += 0.1;
  console.log(escala);

  if (escala > 1.7) {
    escala = 1;
  }
  document.documentElement.style.setProperty("--font-scale", escala);
  console.log(document.documentElement.style.getPropertyValue("--fs-p"));
}
