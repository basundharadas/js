var b = 45

if (true){
    var b = 30
}
//var can be accessed 
//outside of the block scope
console.log(b)

function one(){
    const last = "Smith"
    function two(){
        const first = "John"
        console.log(last)
    }
    //console.log(first)
    //one cannot access 
    //block scope of the function two()

    two()
}
one()

if (true){
    const user = "Roxy"
    if(user == "Roxy"){
        const web = "Youtube"
        console.log(user+" "+web)
    }
    //console.log(web)
}
//console.log(user)


//console.log(addagain(78))

const addagain = function (num){
    return num+12
}

console.log(addagain(78))