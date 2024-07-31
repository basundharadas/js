const sym = Symbol("password")

const user = {
    name: "Nikita",
    age: 78,
    [sym]: "12345678",
    "place": "Michigan",
    company: "Walmart",
    disabled: false,
    onduty: ['Monday', 'Wednesday', 'Saturday'],
}

//object properties can be accessed using
//dot notation or bracket notation
console.log(user.disabled)
console.log(user["age"])
console.log(user["place"])
console.log(user[sym])

user.company = "Docomo"
//Object.freeze(user)
//make sthe object unable to change its properties
user.company = "Fresh&Fine"
console.log(user)

user.greeting = function(){
    console.log("Whats up!")
}
console.log(user.greeting())

user.greeting2 = function(){
    console.log(`How are you, ${this.name}?`)
}
console.log(user.greeting2())



//Singleton Object

const magicpet = new Object()
magicpet.name = "Jonas"
magicpet.breed = "Samoyed"
magicpet.neutered = true
console.log(magicpet)

const person = {
    email:"bitch89@mail.com",
    name: {
        firstname: "Pink",
        lastname: "Princess",
    }
}
console.log(person)
console.log(person.name.lastname)

//combining objects
const obj1 = {
    1:'a',
    2:'b',
}
const obj2 = {
    3:'c',
    4:'d',
}

//const obj3 = {obj1, obj2}
//const obj = Object.assign({}, obj1, obj2)
//assigns the peoperties of the objects
//to the target object
const obj3 = {...obj1, ...obj2}
console.log(obj3)

const users = [
    {
        name: "Roy",
        id: 78,
    },
    {
        name: "Brian",
        id: 11,
    },
    {
        name: "Panko",
        id: 68,
    },
]

console.log(users[0].id)
console.group(Object.keys(magicpet))
//makes an array of the keys of the object magicpet
//vice versa for the values
//also for the entries: key:value
console.group(Object.values(magicpet))
console.group(Object.entries(magicpet))
//checks if the object has this property
console.group(magicpet.hasOwnProperty('logged'))



//object destructuring

const course = {
    name:"intro to pole-dancing",
    instructor: "Kim Jung Yee",
    price: 3000,
}
const {instructor: teacher} = course
console.log(teacher)

//React
// const navbar = ({company}) =>{

// }
//APIs: JSON

// {
//     "name": "Ansh",
//     "book": "Magic of Gardening",
//     "price": 199,
// }