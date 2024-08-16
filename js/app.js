let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if(amigo.value == ""){
        alert("Precisa por algum nome")
    } else {
        amigos.push(amigo.value);
    }

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';

    atualizarLista();
    atualizarSorteio();
}

function sortear() {

    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio')
    sorteio.innerHTML = '';
    for (let i = 0; i < amigos.length; i ++) {
        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function excluirAmigo(index){
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice --) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice -1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio (){
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {

        let paragrafo = document.createElement('p');
        paragrafo.classList.add('paragrafo-nome');
        paragrafo.textContent = amigos [i];

        paragrafo.addEventListener('click', function(){
            excluirAmigo(i);
        });

        lista.appendChild(paragrafo);
    }
}

function allRei(index){
    amigos.splice(index, 10);
    atualizarLista();
    atualizarSorteio();
}

function reiniciar() {
    amigo = [];
    allRei();
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
