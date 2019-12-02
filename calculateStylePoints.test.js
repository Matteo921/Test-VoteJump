const assert = require('assert');
const stylePoints = require('./calculateStylePoints');

describe('points', () => {
	describe('calculateStylePoints', () => {
		it('should display correct style points', () => {
			const points = stylePoints([15, 19, 17.5, 16, 17.5])
			assert.equal(points, 51)
		});
	});
});