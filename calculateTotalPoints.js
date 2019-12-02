const calculateDistancePoints = require('./calculateDistancePoints');
const calculateDistancePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
	const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
	const stylePoints = calculateStylePoints(styleNotes);

	return distancePoints + stylePoints + windFactor + gateFactor;
}

modul.exports = calculateTotalPoints;