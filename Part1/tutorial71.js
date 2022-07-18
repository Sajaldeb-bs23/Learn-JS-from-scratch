var number = [1, 2, 3, 4, 5];
var square = [];


number.forEach(function(x){
    square.push(x*x);
});

console.log(square)


var square2 = number.map(function(x){
    return x*x;
})

console.log(square2);


var greater = number.filter(function(x){
    return x>2;
});

console.log(greater);