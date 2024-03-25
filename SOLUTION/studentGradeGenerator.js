// Define the grades variable
const grades = -1;

// Check if the grade is within the specified ranges and output the corresponding grade
if (grades > 79 && grades <= 100) {
    console.log("A"); // If the grade is between 80 and 100, output "A"
} else if (grades >= 60 && grades <= 79) {
    console.log("B"); // If the grade is between 60 and 79, output "B"
} else if (grades >= 49 && grades <= 59) {
    console.log("C"); // If the grade is between 50 and 59, output "C"
} else if (grades >= 40 && grades < 49) {
    console.log("D"); // If the grade is between 40 and 49, output "D"
} else if (grades > 0 && grades < 40) {
    console.log("E"); // If the grade is between 1 and 39, output "E"
} else if (grades < 0 || grades > 100) {
    console.log("Not a valid mark"); // If the grade is less than 0 or greater than 100, output "Not a valid mark"
}