const form = document.querySelector('.form-cadastrar');
const nomeContato = document.querySelector('.nome-contato');
const numeroContato = document.querySelector('.numero-contato');
const tbody = document.querySelector('tbody');

function cadatrarContato() {
    if (nomeContato.value.trim() === '' || numeroContato.value.trim() === '') {
        alert('Por favor, preencha todos os campos');
        return;
    }
    tbody.innerHTML += `
        <tr>
            <td>${nomeContato.value}</td>
            <td>${numeroContato.value} </td>
        </tr>

    `
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    cadatrarContato();

    nomeContato.value = '';
    numeroContato.value = '';
})


