function bruh(name){
    if (!name){
        console.log("what the fuck nigga")
    }
    return `Fuck you, ${name}!`
}
console.log(bruh("Sam"))
// no argument is passed, 
//output returned is undefined

//rest opeartor : ...argument
//for passing multiple parameters
//into a single argument
function cartPrice(...num1){
    return num1;
}
function cartPrice2(val1, val2, ...num1){
    return num1;
}
console.log(cartPrice2(200, 300, 400, 890))

const useragain = {
    name: "Tyler",
    age: 89,

}

function handleObject(anyobject){
    return `${anyobject.name} is ${anyobject.age} years old`
}
console.log(handleObject(useragain))
//passing the object directly
console.log(handleObject({
    name: "Tyler",
    age: 89,
}))

const newarr = [89, 90, 34242,77]
function returnsecond(array1){
    return array1[1]
}
console.log(returnsecond(newarr))