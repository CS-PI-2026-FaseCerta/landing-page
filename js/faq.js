fetch('data/perguntas.json')
    .then(response => response.json())
    .then(data => {
        const faqItems = document.querySelectorAll('.faq-details');

        faqItems.forEach((item, index) => {
            // garante que existe dados suficientes
            if (data[index]) {
                const h1 = item.querySelector('.pergunta');
                const p = item.querySelector('.resposta');

                h1.textContent = data[index].pergunta;
                p.textContent = data[index].resposta;
            }
        });
    })
    .catch(err => console.error('Erro ao carregar JSON:', err));