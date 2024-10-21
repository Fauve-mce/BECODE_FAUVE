let player1Score = 0;
let player2Score = 0;
const player1Display = document.getElementById("player1Score");
const player2Display = document.getElementById("player2Score");
const player1Btn = document.getElementById("player1Btn");
const player2Btn = document.getElementById("player2Btn");
const resetBtn = document.getElementById("resetBtn");
const maxGames = 5;

function updateScores() {
    player1Display.textContent = player1Score;
    player2Display.textContent = player2Score;
}

function checkForWinner() {
    const totalGames = player1Score + player2Score;
    if (totalGames === maxGames) {
        player1Btn.disabled = true;
        player2Btn.disabled = true
        if (player1Score > player2Score) {
            player1Display.classList.add("winner");
            player2Display.classList.add("loser");
        } else {
            player2Display.classList.add("winner");
            player1Display.classList.add("loser");
        }
    }
}

player1Btn.addEventListener("click", function () {
    if (player1Score + player2Score < maxGames) {
        player1Score++;
        updateScores();
        checkForWinner();
    }
});

player2Btn.addEventListener("click", function () {
    if (player1Score + player2Score < maxGames) {
        player2Score++;
        updateScores();
        checkForWinner();
    }
});

resetBtn.addEventListener("click", function () {
    player1Score = 0;
    player2Score = 0;
    player1Btn.disabled = false;
    player2Btn.disabled = false;
    player1Display.classList.remove("winner", "loser");
    player2Display.classList.remove("winner", "loser");
    updateScores();
});