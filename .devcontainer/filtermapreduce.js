const mynums = [34, 76, 10, 55, 98]

//const newnums = mynums.filter((val)=> val>50)

const newnums = mynums.filter((val) => {
    //if parentheses are used
    //a scope is introduced
    //so return is to be used for 
    //the visibility of an output
    return val > 50
})
console.log(newnums);

const newagain = []
newnums.forEach((val) => {
    if (val > 50) {
        newagain.push(val)
    }
})

console.log(newagain)

let cars = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 3
    },
    {
        "color": "brown",
        "type": "jeep",
        "registration": new Date('2013-09-23'),
        "capacity": 5
    }
]

let carsused = cars.filter((k) => k.type === "minivan")
let carsused2 = cars.filter((k) => k.capacity == 5)
let carsused3 = cars.filter((k) => {
    return k.capacity == 5 && k.type === "jeep"
})

console.log(carsused);
console.log(carsused2);
console.log(carsused3);

const prime = [1, 2, 3, 5, 7, 11, 13]

const newnumsbruh = prime.map((val) => val + 110)

console.log(newnumsbruh);


//chaining

const bruh = prime.map((val) => val + 90)
    .map((val) => val - 2).filter((val) => val > 95)
console.log(bruh);

nat = [1, 2, 3, 4, 5]

const initial = 0
// const sum = natural.reduce((acc, currval)=>{
//     console.log(`accumulator: ${acc} & current value: ${currval}`);

//     return acc+currval
// },0)

const s = nat.reduce((a, c) => a + c, 0)
console.log(s);

let carsagain = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 3
    },
    {
        "color": "brown",
        "type": "jeep",
        "registration": new Date('2013-09-23'),
        "capacity": 5
    }
]

const totCap = carsagain.reduce((acc,item)=> acc+item.capacity,0)
console.log(totCap)