document.write("Sajal DEB <br\> ")
console.log("GFAHSGAJHGA HGKJHG")
document.write("Sajal DEB <br\> ") 
document.write("Sajal DEB <br\> ")
document.write("Sajal DEB <br\> ")

var name = "Sajal Debnath, BS23";
document.write(name + "<br\>");
var age = 25;
document.write(age)

console.log(typeof(age))
console.log(typeof(name))

var text = prompt("Enter your name: ")
document.write(text.length +"<br\>" )

document.write(text.toLowerCase())
document.write(text.toUpperCase() +"<br\>")

// tutorial 19
var sum = 0;

for (var i=0;i<=10;i++){
    sum = sum+i
}
document.write(sum + "<br/>")


var x = 0;
while(x<=20){
    document.write(x + " ");
    x=x+1;
}

// tutorial 23
var result =  x>2 ? "Positive" : "Negative";
document.write(result)

x = 0

var result =  x>2 ? "Positive" : x==0 ? "Zero": "Negative";
document.write(result)

document.write("<br/>")

// tutorial 24

function result2(num1, num2){
    var res = num1*num2;
    return res;
}

var mul = result2(5,6)
// document.write(result2(6,6))
document.write(mul)
document.write("<br/>");

// immediately invocable function 

(function display(){
    console.log("Sajal Debnath")
})();


// Function expression 
const f = function display(ms){
    console.log("Sajal Debnath2")
    console.log(ms)
};

f("ppppppppppp");


console.log("function expression done.")

