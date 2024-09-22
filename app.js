document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulação de envio
    alert(`Obrigado pelo contato, ${name}! Sua mensagem foi enviada com sucesso.`);
    
    // Limpar o formulário
    document.getElementById('contactForm').reset();
});
