var1 = document.getElementById("heading1")
var1.innerHTML = "Sajal Debnath";
var2 = document.getElementById("heading2")
var2.innerHTML = "Brain Station 23";

var3 = document.getElementsByTagName("h1")

var3[2].innerHTML = "get element by tagname"
var3[3].innerHTML = "get element by tagname 2"
var3[4].innerHTML = "get element by tagname 3"

function message(){
    variable = document.getElementById("change")
    variable.innerHTML = "Another Para is here.. Changed."
}

function message1(){
    variable = document.getElementById("change")
    variable.innerHTML = "WOW... again changed."
}