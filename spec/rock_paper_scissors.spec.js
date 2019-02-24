const { RockPaperScissors } = require('../spec.helper.js')
const mockMath = Object.create(global.Math)
mockMath.random = () => .5
global.Math = mockMath
  
describe('Rock Paper Scissors', function() {
    let rps = new RockPaperScissors() 

    it('should return "You Win! The droids choice was scissors"', () => {
        expect('rock').to.be.eql('"You Win! The droids choice was scissors"')
    })
})