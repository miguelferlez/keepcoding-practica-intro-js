const user = {
    name: 'John',
    surname: 'Doe Smith',
    bootcampModules: [
        { name: 'Node.js', startDate: '2025-03-10', },
        { name: 'Git', startDate: '2025-01-22', },
        { name: 'React', startDate: '2025-05-12', },
    ],
    activeSearching: false,
};

const getBootcampModules = (name='') => {
    for (const bootcampModule of user.bootcampModules) {
        if (name.toLowerCase() === bootcampModule.name.toLowerCase()) {
            return bootcampModule;
        }
    }
};

const reactModuleStartDate = getBootcampModules('React').startDate;
console.log('fecha de inicio del módulo de react:', reactModuleStartDate); // fecha de inicio del módulo de react: 2025-05-12

/* Alternativa con método find() */

// const reactModule = user.bootcampModules.find(module => module.name === 'React');
// console.log('fecha de inicio del módulo de react:', reactModule.startDate); // fecha de inicio del módulo de react: 2025-05-12