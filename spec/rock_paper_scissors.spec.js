const { RockPaperScissors } = require('../spec.helper.js')
const mockMath = Object.create(global.Math)
mockMath.random = () => 0.5
global.Math = mockMath

describe('Rock Paper Scissors', function() {
    let rps = new RockPaperScissors() 

    it('should return "You Win! The droids choice was scissors"', () => {
        expect(rps.play('rock')).to.eql('You lost! The droids choice was paper')
    })

    it('should return "You Lost! The droids choice was scissors"', () => {
        expect(rps.play('paper')).to.eql('These are not the droids youre looking for! The droids choice was paper')
    })

    it('should return "You Win! The droids choice was paper"', () => {
        expect(rps.play('scissors')).to.eql('You Win! The droids choice was paper')
    })

    it('should return "You Win! The droids choice was rock"', () => {
        expect(rps.play('paper')).to.eql('These are not the droids youre looking for! The droids choice was paper')
    })

    it('should return "You Lost! The droids choice was rock"', () => {
        expect(rps.play('scissors')).to.eql('You Win! The droids choice was paper')
    })

    //TIE
    it('should return "These are not the droids youre looking for! The droids choice was paper"', () => {
        expect(rps.play('paper')).to.eql('These are not the droids youre looking for! The droids choice was paper')
    })
})