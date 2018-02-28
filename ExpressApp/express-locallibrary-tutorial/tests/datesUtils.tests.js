var expect = require('chai').expect

var datesUtils = require('../utils/dates');

describe('Date utils tests', () => {

    describe('Calculate Lifespan',() => {
        it('should return diff between 2 same dates', () => {
            var toto = datesUtils.CalcLifeSpan()
            expect(toto).to.equals(0);
        } )
        it('should return diff between 2 dates', () => {
            var toto = datesUtils.CalcLifeSpan('1976-01-25')
            expect(toto).to.equals(42);
        } )
    })
})