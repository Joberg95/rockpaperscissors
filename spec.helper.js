const chai = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
global.browser = new BrowserHelpers()
global.expect = chai.expect;
const fs = require('fs')

let rps = fs.readFileSync('src/js/rock_paper_scissors.js');
eval( rps + `\nexports.RockPaperScissors = RockPaperScissors;`)