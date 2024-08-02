const  user = "bruh"
//check for the truthfulness value of the above value
//in the below condition
if (user) {
    console.log("What the fuck!")
} else {
    console.log("Chill nigga")
}

// falsy values: false, 0, -0, BigInt 0n, "", 
// null, undefined, Nan
// truthy values: true, 1, not an empty string, "0"
//'false', " " (content present in between " " and ' ')
// [], {}, function(){}

const arr = []

if (arr.length === 0) {
    console.log("This shit is empty")
}

const obj = {}

if (Object.keys(obj).length === 0) {
    console.log("This shit is empty again")
}

console.log(false == 0)
console.log(false == "")
console.log(0 == "")

//nullish coaelscing operator
//to check the safety of the assignment
let val1
//val1 = 90 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 90 ?? 908
console.log(val1)

let a = 90, b = 89
a>b ? console.log("a is greater than b"):
console.log("b is greater than b")

for (let index = 0; index < 8; index++) {
    //const element = array[index];
    console.log(index);
    if (index == 5){
        console.log("Detected 5 lmao");
        continue;
    }
    
}


let k = 9
const myArray = [67,23,55,77,992]
while (k < myArray.length) {
    console.log(myArray[k])
    k++
}


const yourArr = [78,24,67,33,443]
//for of
for (const i of yourArr) {
    console.log(i);
}

const greetings = 'Wassup nigga?'
for (const i of greetings) {
    console.log(i)
}

//Maps: holds key-value pairs
const newMap = new Map()
newMap.set('Robin', '190')
newMap.set('Aaron', '897')
newMap.set('Lisa', '908')
newMap.set('Jimmy', '56')

console.log(newMap);

for (const [key] of newMap) {
    console.log(key)
}
for (const [value] of newMap) {
    console.log(value)
}
for (const [key, value] of newMap) {
    console.log(key+" - "+value)
}
//not iterable using for in
//iterable using only for each
for (const key in newMap) {
   
}

const objbitch = {
    name: "Harry",
    location: "Edinburgh",
}

//objects are not iterabke
// for (const [key] of objbitch) {
//     console.log(key);
    
// }

//for in loop

const myobj = {
    js: "Javascript",
    cpp: "C++",
    py: "Python",
    java: "Java",
}

for (const key in myobj) {
    console.log(myobj[key])
}

const pro = ['Java', 'Python', 'C++']
for (const key in pro) {
    console.log(pro[key]);
    
}


//for of: arrays, maps
//for in: objects
//forEach: arrays

const cats = ['Siamese', 'Calico', 'Maine Coon']
// cats.forEach(function(val){
//     console.log(val);
    
// })
// const values = cats.forEach(function(val){
//     //console.log(val);
//     return val
// })






cats.forEach((val)=>{
    console.log('I love '+val)+' cats';
    
})

function display(val){
    console.log(val)
}
console.log("My fav cat breeds are: ")

cats.forEach(display)

cats.forEach((val, index, arr)=>{
    console.log(val, index, arr);
})

const empobj = [{
    name:"Patrick",
    age: 13
},
{
    name:"Nora",
    age: 14
},
{
    name:"Sheila",
    age: 10
}]

empobj.forEach((item)=>{
    console.log(item.name+" is "+item.age+" years old.");
    
})