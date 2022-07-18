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
    variable.style.color = "green";
}

function message1(){
    variable = document.getElementById("change")
    variable.innerHTML = "WOW... again changed."
    variable.style.color = "red"
}


photos = ["image/1.jpeg", "image/2.jpeg", "image/3.jpeg", "image/4.jpeg"]
count = 0;

var ImgTag = document.querySelector("img")

function prev(){
    console.log(count)
    console.log(photos.length)
    count --;
    if (count<0)
    {
        console.log(count)
        count = photos.length -1;
        console.log(count)
        ImgTag.src = photos[count]
    }
    ImgTag.src = photos[count]
}

function next(){
    count ++;
    if (count>3)
    {
        count = 0;
        ImgTag.src = photos[count]
    }
    ImgTag.src = photos[count]
}


// var paraVar = document.getElementById("#para1")
function Add(){
    var paraVar = document.getElementById("para1")
    paraVar.classList.add("para-style")
    paraVar.style.color = "red";
}

function Remove(){
    var paraVar = document.getElementById("para1")
    paraVar.classList.remove("para-style")
    paraVar.style.color = "blue";

}

// Eventlistener

var event_var = document.getElementById("demo")

event_var.addEventListener("mouseover", function(){
    event_var.classList.add("para-style2")
});

event_var.addEventListener("mouseout", function(){
    event_var.classList.remove("para-style2")
});


const form = document.querySelectorAll("form")[0]
const name = form.querySelector("div #name")
const email = form.querySelector("div #email")
const pass = form.querySelector("div #password")

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("submitted");
    console.log(name.value)
    console.log(email.value)
    console.log(pass.value)

    const userInfo = {
        name: name.value,
        email: email.value,
        pass: pass.value
    }

    name.value = "";
    email.value = "";
    pass.value = "";

    console.log(userInfo);
});

document.write("<br/>");
// try catch  (61 tutorial )


try {
    document.write("Hello, Sajal" + "<br/>");
    document.write(xxx);
    document.write("error in previous line.")
}
catch(error){
    document.write(error.name);
    console.log(error.message)
    document.write( "<br/>" + "error occured." + "<br/>")
}finally{
    document.write("In finally block ")
}