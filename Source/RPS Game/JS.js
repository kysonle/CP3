
function f(player) {
// computer choice to play
    var computer = Math.random();
    if (computer < 0.34) {
        computer = "Rock";
    } else if (computer <= 0.67) {
        computer = "Paper";
    } else computer = "Scissors";


    if (player === "Rock") {
        if (computer === "Rock") {
            document.getElementById("results").innerHTML = "Tie";
        } else if (computer === "Paper") {
            document.getElementById("results").innerHTML = "You Loose";
        } else {
            document.getElementById("results").innerHTML = "You Win";
        }
    } else if (player === "Paper") {
        if (computer === "Rock") {
            document.getElementById("results").innerHTML = "You Win";
        } else if (computer === "Paper") {
            document.getElementById("results").innerHTML = "Tie";
        } else {
            document.getElementById("results").innerHTML = "You Loose";
        }
    } else{
        if (computer === "Rock") {
            document.getElementById("results").innerHTML = "You Lose";
        } else if (computer === "Paper") {
            document.getElementById("results").innerHTML = "You Win";
        } else {
            document.getElementById("results").innerHTML = "Tie";
        }
    }

};