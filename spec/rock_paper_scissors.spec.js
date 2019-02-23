import {rockPaperScissors} from '/spec.helper.js';
const mockMath = Object.create(global.Math)
mockMath.random = () => .5
global.Math = mockMath
  
describe('Rock Paper Scissors', function() {
    let rps = new rockPaperScissors() 
})