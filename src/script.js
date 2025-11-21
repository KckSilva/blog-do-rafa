// Arquivo principal de JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada!');
    
    const botao = document.getElementById('meuBotao');
    
    if (botao) {
        botao.addEventListener('click', function() {
            alert('Botão clicado!');
            // Exemplo usando função do utils.js
            const resultado = utils.somar(5, 3);
            console.log('Resultado da soma:', resultado);
        });
    }
    
    // Navegação suave
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});