TinyTurtle.apply(window, [undefined, 400, 400]);

function square(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
}
function triangle(x){
right(30);
forward(x);
right(120);
forward(x);    
}
function dimension(x){
right(180);
forward(x);
left(60);
forward(x);
right(-60);
forward(x);
left(30);
forward(x);
right(-90);
forward(x);
    
}
// Type your function call below
function house(x){
var x=90
square(x);
triangle(x);
dimension(x);
}
stamp();
house();
