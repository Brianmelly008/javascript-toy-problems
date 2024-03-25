// Define constants for the speed, speed limit, and initialize points variable
const speed = 145; // Speed of the vehicle
const speedlimit = 70; // Speed limit
const points = Math.abs((speed - speedlimit) / 5); // Calculate the points based on the speed difference

// Check if the speed is within the speed limit
if (speed <= 70) {
    console.log("Ok"); // If the speed is within the speed limit, output "Ok"
} 
// Check if the calculated points exceed the threshold for license suspension
else if (points >= 12) {
    console.log("License suspended"); // If the points exceed or equal 12, output "License suspended"
} 
// If the speed exceeds the speed limit, but the points are below the suspension threshold
else if (speed > 70) {
    console.log("points: " + points); // Output the calculated points
}