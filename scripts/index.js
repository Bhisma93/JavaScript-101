// Hello YOU & Hello You Part 2
function hello(name) {
    if (name == undefined){
        console.log("Hello, World!")
    } else{
    console.log(`Hello, ${name}!`);
    }
}
hello("Mustache");
hello();

// Madlib
function madlib(name, subject) {
    return(`${name}'s favorite subject in school is ${subject}.`);
}
console.log(madlib("Bhisma", "Lunch"));

// Tip Calculator and Tip Calculator 2 and Tip Calculator 3
function tipAmount(billAmount, service, people) {
    if (service == "good"){
        return(`Your Tip Amount is ${(billAmount*.20)}, your Total Bill is ${(billAmount + (billAmount*.20))}, and each person will be paying ${((billAmount + (billAmount*.20))/people)}`);
    } 
    else if (service == "fair"){
        return(`Your Tip Amount is ${(billAmount*.15)}, your Total Bill is ${(billAmount + (billAmount*.15))}, and each person will be paying ${((billAmount + (billAmount*.15))/people)}`);
    } 
    else {
        return(`Your Tip Amount is ${(billAmount*.10)}, your Total Bill is ${(billAmount + (billAmount*.10))}, and each person will be paying ${((billAmount + (billAmount*.10))/people)}`);
    }
}
console.log(tipAmount(130, "good", 5));
console.log(tipAmount(130, "fair", 5));
console.log(tipAmount(130, "bad", 5));
