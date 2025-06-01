const form = document.getElementById('perfilForm');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão

    // Pegar interesses (checkboxes marcados)
    const interessesSelecionados = Array.from(form.querySelectorAll('input[name="interesses"]:checked'))
    .map(input => input.value);

    // Pegar casa escolhida (radio)
    const casaSelecionada = form.querySelector('input[name="casa"]:checked')?.value || "Nenhuma";

    // Pegar cor escolhida
    const corEscolhida = form.querySelector('input[name="cor"]').value;

    // Exibir resultado
    resultado.innerHTML = `
    <h3>✨ Suas preferências:</h3>
    <p><strong>Interesses:</strong> ${interessesSelecionados.length > 0 ? interessesSelecionados.join(', ') : 'Nenhum selecionado'}</p>
    <p><strong>Casa de Hogwarts:</strong> ${casaSelecionada}</p>
    <p><strong>Cor do perfil:</strong> ${corEscolhida}
        <span class="cor-preview" style="background-color: ${corEscolhida};"></span>
    </p>
    `;
    resultado.style.display = 'block';
});