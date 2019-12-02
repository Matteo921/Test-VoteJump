const calculateStylePoints = styleNotes => {
	const stylePoints = styleNotes;
	const minValueIndex = stylePoints.findIndex(
		i => i == Math.min(...stylePoints)
	);

	stylePoints.splice(minValueIndex, 1);
	console.log(stylePoints);
	const maxValueIndex = stylePoints.findIndex(
		i => i == Math.max(...stylePoints)
	);

	stylePoints.splice(maxValuIndex, 1);
	console.log(stylePoints);
	const totalStylePoints = stylePoints.reduce((a,b) => a + b);
	console.log(totalStylePoints);
	return totalStylePoints;
};

module.exports = calculateStylePoints;