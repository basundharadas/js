console.log("Heyyo")
//primitive
//strings, number, boolean, null, undefined, symbol, BigInt
//dynamically typed language
//Refernce/non-primitive
//Array, Objects, Functions
let id = Symbol("123")
let another = Symbol("i23")
console.log(id === another)

const myfunc = function(){
    return "Hello Canada!"
}
 
const myfunc2 = name =>{
    return name+" bitch"
}

function myfunc3(){
    return "Deadpool"
}

console.log(myfunc())
console.log(myfunc2("Robin"))
console.log(myfunc3())

//Memory space
//Stack(in primitive data types)
//Heap(in non primitive data types)

let name = "Nikita"
//gets collected in the stack
//the copy of the original element is shared
let user = {
    name: "Raj",
    age: 23,
    company: "Dominos",
}

let nextUser = user

nextUser.company = "McDonalds"
//gets changed in the heap
//the reference is shared
console.log(user)
console.log(nextUser)


const game = "Pacman"
console.log(`My favourite game is ${game}`)
console.log(game.__proto__)
console.log(game.charAt(3))
console.log(game.indexOf("c"))
console.log(game.substring(2,4))
console.log(game.slice(0,4))

const bruh = " bruh "
console.log(bruh.trim())
console.log(bruh.replace("r", "o"))
console.log(bruh.includes(' '))

const sentence = "I love watching beheading videos"
console.log(sentence.split(" "))




