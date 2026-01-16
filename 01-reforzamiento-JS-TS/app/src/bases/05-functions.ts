function greet(name: string): string {
    return `Hello, ${name}!`
}

const message = greet('Nicolas')   
console.log(message)

// NO se puede pasar un argumento de tipo incorrecto (number en lugar de string)
// const message2 = greet(123)

// NO se puede omitir un parámetro requerido
// const message3 = greet()

// NO se puede pasar más argumentos de los definidos en la función
// const message4 = greet('Nicolas', 'Extra')

// NO se puede retornar un tipo diferente al especificado en la firma de la función
// function greet2(name: string): number {
//     return `Hello, ${name}!`
// }

const puts_player = (name: string, number: number): [string, number] => {
    return [name, number]
}

const basket_player = puts_player('Stephen Curry', 30)
console.log(basket_player)
