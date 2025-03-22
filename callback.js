// Function that takes a name and a callback function
function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); 
}

// Callback function to execute after greeting
function sayGoodbye() {
    console.log("Good Morning!");
}

// Calling the function with a name and callback
greet("Prince", sayGoodbye);
