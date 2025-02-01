async function obtenerUsuario(id) {
    let usuario;

    return new Promise(resolve => {
        setTimeout(() => {
            if (id === 1) {
                usuario = { id: 1, nombre: 'John Doe' };
            }
            resolve(usuario);
        }, 2000)
    });
}

const usuario = await obtenerUsuario(1);
console.log(usuario); // {id: 1, nombre: 'John Doe'}