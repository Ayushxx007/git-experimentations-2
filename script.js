console.log("Hello, World!");
const x=()=>{  // Arrow function
    console.log("This is a function");

}
function abc(){ // Function declaration
    console.log("This is another function");
}

const xm=function abc(){ // Function expression
    console.log("This is a function expression");
}

const xd=function (){ // Anonymous function expression
    console.log("This is an anonymous function expression");
}


const abc={
    name:"Ayush",
    age: 25,
    greet: function(){ // Method in an object
        console.log("Hello, " + this.name);
    }
}






