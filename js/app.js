var buttonClick = function(obj) {
    var userChoice = obj.id;
    console.log("User: " + userChoice)

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        alert("The result is a tie!")
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            alert("Rock wins")
        } else {
            alert("Paper wins")
        }      
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            alert("Paper wins")
        } else {
            alert("Scissors wins")
        }
    } else  if (choice1 === "scissors") {
        if (choice2 === "rock") {
            alert("Rock wins")
        } else {
            alert("Scissors wins")
        }
    }
}
compare(userChoice, computerChoice)
};