const course = {
    name: "Angular JS workshop",
    price: 900,
    instructor: "Jonas Ducker",
    introduce: function () {
        console.log(`${this.instructor} is teaching ${this.name}`)
        console.log(this)
    }
}

// course.introduce()
// course.name = "React JS Workshop"
// course.introduce()

console.log(this)
//global object in a browser: window

// function pink(){
//     console.log(this)
//     console.log(this.name)//undefined
//     //cannot be accesssed
// }
// pink()


const coffee = () => {
    console.log(this)
    console.log(this.name)
}
coffee()


const addtwo = (a, b) => { return a + b }
//const subtract = (a, b) => (a - b)

const objectArr = () => ({user: "pookie"})
console.log(objectArr())









