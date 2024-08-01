//Immediately Invoked Function Expressions (IIFE)

//named IIFE
(function func1(){
    console.log("Bruh")
})();
//to avoifd the pollution of the global scope variables
//functions are written in this way

(function func2(name){
    console.log(`What the fuck, ${name}!`)
})('Richard');

//unamed IIFE
((price) => {
    console.log(`The course costs ${price}`)
})(450);