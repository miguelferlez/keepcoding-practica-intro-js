const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto 1' },
            { id: 2, nombre: 'Proyecto 2' }
        ]
    },
    {
        id: 2,
        nombre: 'María',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id: 3, nombre: 'Proyecto 3' },
            { id: 4, nombre: 'Proyecto 4' }
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            { id: 5, nombre: 'Proyecto 5' },
            { id: 6, nombre: 'Proyecto 6' }
        ]
    }
];

/* desarrolladoresJavascript */

const javasacriptDevs = datos.filter(user => user.habilidades.includes('JavaScript'));
console.log(javasacriptDevs); // [{id: 1, nombre: 'Juan', habilidades: ['JavaScript', 'HTML', 'CSS'], proyectos: [{ id: 1, nombre: 'Proyecto 1' }, { id: 2, nombre: 'Proyecto 2' }]}]

/* nombresProyectos */

const projectsNames = datos.map(user => user.proyectos.map(project => project.nombre)).flat();
console.log(projectsNames); // ['Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 4', 'Proyecto 5', 'Proyecto 6']

