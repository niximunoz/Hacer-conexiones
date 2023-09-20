function removerConexion(elemento, opcion) {
    elemento.closest('.card-list-item').remove();
    let numeroDeConexiones = document.querySelector('#connectionRequestNumber').innerText;
    numeroDeConexiones--;
    document.querySelector('#connectionRequestNumber').innerText = numeroDeConexiones;
    if (opcion === 'aceptar') {
        let numeroDeConexiones = document.querySelector('#totalConnections').innerText;
        numeroDeConexiones++;
        document.querySelector('#totalConnections').innerText = numeroDeConexiones;
    }
}

function editProfile() {
    const textoNombre = document.querySelector('#userName');
    if (textoNombre.innerText == 'Jane Doe') {
        textoNombre.innerText = 'Nixi Muñoz';
    } else {
        textoNombre.innerText = 'Jane Doe';
    }
}