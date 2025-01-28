const calcularPromedio = (numeros) => {
    let sumaTotal = 0;

    // la condición del bucle era incorrecta, i no debería ser igual que numeros.length, pues numeros[5] no existe en listaNumeros y devolverá undefined.
    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }

    const promedio = sumaTotal / numeros.length;
    return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);
console.log(`promedio de [${listaNumeros}]: ${promedioNumeros}`); // promedio de [1,2,3,4,5]: 3