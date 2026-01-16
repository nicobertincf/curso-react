const ironman = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: '10880',
        city: 'New York'
    }
}

// Usando structuredClone: crea una copia profunda (deep clone)
// - Copia todos los niveles anidados del objeto
// - Los cambios en el nuevo objeto no afectan al original
// - Es más seguro para objetos complejos con anidación
const spiderman = structuredClone(ironman)
spiderman.firstName = 'Peter'
spiderman.lastName = 'Parker'
spiderman.age = 20

// Alternativa con spread operator: crea una copia superficial (shallow clone)
// const spiderman = {
//     ...ironman,
//     firstName: 'Peter',
//     lastName: 'Parker',
//     age: 20
// }
// - Solo copia el primer nivel del objeto
// - Los objetos anidados (como address) siguen siendo referencias al original
// - Más rápido pero menos seguro para objetos anidados

console.log(ironman)
console.log(spiderman)
