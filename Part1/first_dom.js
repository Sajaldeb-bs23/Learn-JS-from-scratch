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