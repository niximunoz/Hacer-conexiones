
function logout(elemento){
    console.log("Vamos a hacer un logout!");
}

function removerConexion(elemento){
    elemento.closest('.card-list-item').remove();
    let elementoNumeroDeConexiones = document.querySelector('#connectionRequestNumber');
    let numeroDeConexiones = elementoNumeroDeConexiones.innerText;
    numeroDeConexiones --;
    elementoNumeroDeConexiones.textContent = numeroDeConexiones;
}

function agregarConexion(elemento){
    let misConexiones = document.querySelector('#myConnections');
    let imagenDeAvatar = elemento.closest('.card-list-item').querySelector('.avatar-s');
    let nombreDeConexion = elemento.closest('.card-list-item').querySelector('span').innerText;
    console.log(imagenDeAvatar)
    misConexiones.innerHTML += `
                <li class="card-list-item start">
                    <img src="${imagenDeAvatar.src}" alt="${imagenDeAvatar.alt}" class="avatar-s">
                    ${nombreDeConexion}
                </li>`;

    let elementoTotalDeConexiones = document.querySelector('#totalConnections');
    let numeroDeConexiones = elementoTotalDeConexiones.innerText;
    numeroDeConexiones ++;
    elementoTotalDeConexiones.innerText = numeroDeConexiones;
    
    removerConexion(elemento);

}

function verMas(elemento){
    alert("En un momento cargaremos tu lista completa de conexiones.");
}
function editProfile(){
    textoNombre = document.querySelector('#userName');
    if(textoNombre.innerText == 'Jane Doe'){
        textoNombre.innerText = 'Nixi Muñoz';
    }else{
        textoNombre.innerText = 'Jane Doe';
    }
    
    console.log(textoNombre.innerText);
}