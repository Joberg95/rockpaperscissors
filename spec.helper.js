const chai = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
const fs = require('fs')
global.browser = new BrowserHelpers()
global.expect = chai.expect;

let rps = fs.readFileSync('src/js/rock_paper_scissors.js');
eval( rps + `\nexports.rockPaperScissors = RockPaperScissors;`)