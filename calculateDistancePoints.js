const calculateDistancePoints = (distance, hillSize, kPoint) => {
	let initialPoints = 60;
	if (hillSize >= 185) {
		initialPoints = 120;
	}

	const distanceToKPoint = distance - kPoint;
	let distanceFactor = 0;
	if (hillSize === 98) {
		distanceFactor = 2;
	} else {
		if (hillSize === 120) {
			distanceFactor = 1.8;
		} else {
			distanceFactor = 1.2;
		}
	}
	return initialPoints + distanceToKPoint * distanceFactor;
	
};
module.exports = calculateDistancePoints;