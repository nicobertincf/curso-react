interface Hero {
    firstName: string
    lastName: string
    age: number
    address?: Address
}
interface Address {
    postalCode: string
    city: string
}

const ironman: Hero = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: '10880',
        city: 'New York'
    }
}

const spiderman: Hero = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 20,
}

console.log(ironman)
console.log(spiderman)
