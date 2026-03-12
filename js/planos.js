const itens = document.querySelectorAll(".planos-card");

itens.forEach(el => {
  el.addEventListener("click", () => {
    itens.forEach(i => i.classList.remove("planos-card-ativo"));
    el.classList.add("planos-card-ativo");
  });
});