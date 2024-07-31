const myarr = [2,3,4,5,6]
myarr.push(8)
myarr.pop()
myarr.unshift(8,9) 
//inserts the new elements at the 
//beginning of the array
myarr.shift()
//deletes the new elements at the 
//beginning of the array
console.log(myarr)
console.log(myarr.includes(99))
console.log(myarr.indexOf(99))

const newarr = myarr.join()
console.log(newarr)

const slicefunc = myarr.slice(0,2)
console.log(slicefunc)
console.log(myarr)

const splicefunc = myarr.splice(0,2)
console.log(splicefunc)
console.log(myarr)


const marvel = ['Deadpool', 'Wolverine', 'Spiderman']
const dc = ['Superman', 'Batman', 'Wonder Woman']
//marvel.push(dc)
//pushes new element in the array
// console.log(marvel)
const arrays = marvel.concat(dc)
//concat merges the arrays
console.log(arrays)

const spreadheros = [...marvel,...dc]
console.log(spreadheros)

const many = [1,2,3,[31,4,5,6], [7,8,[12,45]]]
const real = many.flat(Infinity)
//brings all the elements together in an array
console.log(real)

console.log(Array.isArray([2,3,4,5]))
console.log(Array.from("BITCH"))
console.log(Array.from({name:"i love you"}))

const s1 = 234
const y1 = 945
const vy = 772
console.log(Array.of(s1,y1,vy))































