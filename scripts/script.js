
document.addEventListener("DOMContentLoaded", function () {
    let boundaries = document.querySelectorAll(".boundary");
    let end = document.getElementById("end");
    let start = document.getElementById("start");
    let status = document.getElementById("status");
    let gameArea = document.getElementById("game");


    let gameOver = false;

    function resetGame() {
        gameOver = false;
        status.textContent = "Begin by moving your mouse over the 'S'.";
        for (let i = 0; i < boundaries.length; i++) {
            boundaries[i].classList.remove("highlighted");
        }
    }

    start.addEventListener("mouseover", resetGame);

    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseover", function () {
            if (!gameOver) {
                gameOver = true;
    
                for (let j = 0; j < boundaries.length; j++) {
                    boundaries[j].classList.add("highlighted");
                }
    
                status.textContent = "You lost! Try again by moving over 'S'.";
            }
        });
    }


    end.addEventListener("mouseover", function () {
        if (!gameOver) {
            status.textContent = "You win! Well done!";
        }
    });

});
