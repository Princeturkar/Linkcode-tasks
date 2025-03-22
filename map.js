// Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the map function to multiply each number by 2
const squaredNumbers = numbers.map((num) => {
    return num * 2;
});

// Print the new array
console.log("Original Numbers:", numbers);
console.log("Doubled Numbers:", squaredNumbers);
