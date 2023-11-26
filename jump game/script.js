var character = document.getElementById("character");
var scoreSpan = document.getElementById("scoreSpan");
var counter = 0;
var isPaused = false;
var isJumping = false;
var isMovingLeft = false;
var isMovingRight = false;

document.addEventListener("keydown", function (event) {
    if (event.key === " " || event.code === "Space") {
        jump();
    } else if (event.key === "v" || event.keyCode === 86) {
        togglePause();
    } else if (event.key === "ArrowLeft") {
        isMovingLeft = true;
    } else if (event.key === "ArrowRight") {
        isMovingRight = true;
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "ArrowLeft") {
        isMovingLeft = false;
    } else if (event.key === "ArrowRight") {
        isMovingRight = false;
    }
});

function handleKeyPress(event) {
    if (event.key === " " || event.code === "Space") {
        jump();
    }
}

function moveCharacter() {
    if (isPaused || isJumping) {
        return;
    }

    if (isMovingLeft) {
        moveLeft();
    } else if (isMovingRight) {
        moveRight();
    }
}

function moveLeft() {
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (characterLeft > 0) {
        character.style.left = characterLeft - 5 + "px";
    }
}

function moveRight() {
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var characterWidth = parseInt(window.getComputedStyle(character).getPropertyValue("width"));
    if (characterLeft + characterWidth < 750) {
        character.style.left = characterLeft + 5 + "px";
    }
}

function jump() {
    if (isPaused || isJumping) {
        return;
    }
    isJumping = true;
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
        isJumping = false;
    }, 500);
}

function togglePause() {
    isPaused = !isPaused;

    if (isPaused) {
        character.style.animationPlayState = "paused";
        obstaclesContainer.style.animationPlayState = "paused";
    } else {
        character.style.animationPlayState = "running";
        obstaclesContainer.style.animationPlayState = "running";
    }
}

function createObstacle() {
    var obstacle = document.createElement("div");
    obstacle.className = "obstacle";
    obstacle.style.left = "100%";
    obstacle.style.width = "20px";
    obstacle.style.height = Math.floor(Math.random() * 50) + "px";
    obstacle.style.backgroundColor = getRandomColor();

    document.querySelector(".game").appendChild(obstacle);
}

function moveObstacles() {
    var obstacles = document.querySelectorAll(".obstacle");

    obstacles.forEach(function (obstacle) {
        var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

        if (obstacleLeft < -20) {
            obstacle.remove();
            createObstacle();
        } else {
            obstacle.style.left = obstacleLeft - 2 + "px";
        }
    });
}

function getRandomColor() {
    var colors = ["yellow", "red", "green", "blue", "pink"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function checkCollision() {
    let characterRect = character.getBoundingClientRect();
    let obstacles = document.querySelectorAll(".obstacle");

    obstacles.forEach(function (obstacle) {
        let obstacleRect = obstacle.getBoundingClientRect();

        if (
            characterRect.left < obstacleRect.right &&
            characterRect.right > obstacleRect.left &&
            characterRect.top < obstacleRect.bottom &&
            characterRect.bottom > obstacleRect.top
        ) {
            gameOver();
        }
    });
}

function gameOver() {
    isPaused = true;
    character.style.animationPlayState = "paused";
    alert("Fim de jogo. Pontuação: " + Math.floor(counter / 100));
    counter = 0;
    character.style.left = "50px";
    document.querySelectorAll(".obstacle").forEach(function (obstacle) {
        obstacle.remove();
    });
    togglePause(); // Retoma o jogo
}

var checkDead = setInterval(function () {
    if (isPaused) {
        return;
    }

    moveCharacter();
    moveObstacles();
    checkCollision();

    counter++;
    scoreSpan.innerHTML = "Pontuação: " + Math.floor(counter / 100);
}, 10);

// Crie obstáculos iniciais
createObstacle();
createObstacle();
createObstacle();