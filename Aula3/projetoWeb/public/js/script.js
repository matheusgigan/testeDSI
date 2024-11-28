// Espera o DOM carregar completamente antes de executar
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão pelo ID
    const darkModeButton = document.getElementById("darkModeButton");

    // Adiciona o evento de clique
    darkModeButton.addEventListener("click", function() {
        // Alterna a classe 'dark-mode' no elemento <body>
        document.body.classList.toggle("dark-mode");
    });
});
