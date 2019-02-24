function getDroidChoice() {
const choices = ["rock", "paper", "scissors"]
let random = Math.random()
random = random * 3
const randomNumber = Math.floor(random)
return choices [randomNumber]

}


class RockPaperScissors {
    constructor() {
        this.play = (userChoice) => {
            const droidChoice = getDroidChoice();
            switch (userChoice + "-" + droidChoice) {
                case "rock-scissors":
                case "paper-rock":
                case "scissors-paper":
                    return `You Win! The droid's choice was ${droidChoice}`;
                case "rock-paper":
                case "paper-scissors":
                case "scissors-rock":
                    return `You lost! The droid's choice was ${droidChoice}`;
                case "rock-rock":
                case "paper-paper":
                case "scissors-scissors":
                    return `These are not the droids you're looking for! The droid's choice was ${droidChoice}`;
            }
        };
    }
}
