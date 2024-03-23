function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerKmAboveLimit = 1;

    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const kmAboveLimit = speed - speedLimit;
        const demeritPoints = Math.floor(kmAboveLimit / kmPerDemeritPoint);
        
        if (demeritPoints > 12) {
            return "License suspended";
        } else {
            return "Points: " + demeritPoints;
        }
    }
}

const speed = 80;
const result = calculateDemeritPoints(speed);
console.log(result);