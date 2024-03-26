enum Direction{
    Up,      //or we define string or number 
    Down,
    Left,
    Right
}

function doSomething(keyPressed : Direction){
    if(keyPressed==Direction.Up){

    }
}

doSomething(Direction.Left);
doSomething(Direction.Right);
console.log(Direction.Up);


// enum is enumeration and it's help to create human readable way to represent a set of constant value.
//basically iterate over constant value