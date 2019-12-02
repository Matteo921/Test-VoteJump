const assert = require('assert');
const distancePoints = require('./calculateDistancePoints');

describe('points', () => {
	describe('calculateDistancePoints', () => {
		it('should display correct distance points for player one', () => {
			const playerOne = distancePoints(145,190,98);
			assert.equal(playerOne, 176.4);
		});
	});
});

describe('points', () => {
	describe('calculateDistancePoints', () => {
		it('should display correct distance points for player one', () => {
			const playerTwo = distancePoints(120,190,120);
			assert.equal(playerOne, 120);
		});
	});
});

describe('points', () => {
	describe('calculateDistancePoints', () => {
		it('should display correct distance points for player one', () => {
			const playerThree = distancePoints(190,190,200);
			assert.equal(playerOne, 108);
		});
	});
});