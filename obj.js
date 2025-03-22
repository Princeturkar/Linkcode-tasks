// Define a person object with nested properties
const person = {
    name: "Prince",
    age: 22,
    address: {
        city: "Pune"
    }
};

// Print the entire person object
console.log(person);

// Access and print specific properties of the object
console.log("Name:", person.name);
console.log("Age:", person["age"]);
console.log("Address:", person["address"]);

// Access and print nested properties
console.log("City:", person.address.city);
