function adicionar() {
    let amigo = document.querySelector('#nome-amigo');
    let lista = document.querySelector('#lista-amigos');

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}