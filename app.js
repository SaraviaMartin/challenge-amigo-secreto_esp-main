let listaDeAmigos = [];
let lista = document.getElementById('listaAmigos');
let inputNombre = document.getElementById('amigo');
let resultado = document.getElementById('resultado');

//funcion agregar amigo
function agregarAmigo(){
    let nombreDeAmigo = inputNombre.value.trim();

    if (nombreDeAmigo === '') {
        alert('Debes ingresar un nombre.');
        return;
    } else {
        listaDeAmigos.push(nombreDeAmigo);
        inputNombre.value = '';
        console.log(listaDeAmigos);
        actualizarLista();
    }
}

//funcion para actualizar la lista de amigos
function actualizarLista(){
    lista.innerHTML = '';

    listaDeAmigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    })
}

//funcion para sortear amigo secreto
function sortearAmigo(){
    if (listaDeAmigos.length === 0){
        alert('Debes ingresar al menos un amigo.');
        return;
    }
    let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    resultado.innerHTML = `<li>El amigo secreto sorteado es : ${amigoSorteado}</li>`
}

//funcion para limpiar la lista de amigos
function limpiarLista(){
    listaDeAmigos = [];
    actualizarLista();
    resultado.innerHTML =  '';
}

