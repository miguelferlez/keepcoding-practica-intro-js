const usuario = {
    nombre: 'John',
    apellidos: 'Doe Smith',
    modulosBootcamp: [
        { nombre: 'Node.js', fechaInicio: '2025-03-10', },
        { nombre: 'Git', fechaInicio: '2025-01-22', },
        { nombre: 'React', fechaInicio: '2025-05-12', },
    ],
    busquedaActiva: false,
};

const obtenerModuloBootcamp = (nombre='') => {
    for (const moduloBootcamp of usuario.modulosBootcamp) {
        if (nombre.toLowerCase() === moduloBootcamp.nombre.toLowerCase()) {
            return moduloBootcamp;
        }
    }
};

const fechaModuloReact = obtenerModuloBootcamp('React').fechaInicio;
console.log('fecha de inicio del módulo de react:', fechaModuloReact);

/* Alternativa con método find() */

// const moduloReact = usuario.modulosBootcamp.find(modulo => modulo.nombre === 'React');
// console.log('fecha de inicio del módulo de react:', moduloReact.fechaInicio);