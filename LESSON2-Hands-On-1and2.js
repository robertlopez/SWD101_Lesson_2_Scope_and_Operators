//Hands-On Assignment 1
function sumParam(a,b=10) {
    return a+b;
}
function divideParam(a,b=10) {
    return a/b;
}
function averageParam(a,b=10) {
    return (a+b)/2;
}
//Hands-On Assignment 2
sumParamArrow = (a,b=10)=>a+b;
divideParamArrow = (a,b=10)=>a/b;
averageParamArrow = (a,b=10)=>(a+b)/2;

//Hands-On Assignment 3
// create TWO JavaScript objects using the starter code below.
// Your objects must have at least THREE properties and
// ONE method each using the this keyword.
let newProduct = { type: "car", minTopSpeed: "mach 1", color: "gun metal grey"};
let wishList = {priceMax: "$20,000", maxTopSpeed:"mach 10", flightCapable: "yes"};
console.log(this.newProduct);
console.log(this.wishList);


