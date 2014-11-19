


$(function () {

    var board = [false, false, false, false, false, false, false, false, false];

    var penalty = 0;
    var score = 0;
    var seed = 0;
    var time = 0;
    var interval = 3000;

    function showImageByBoard() {
        for (var I = 0; I < 9; I++) {
            var id = "#img" + I;
            if (board[I] == true) {
                $(id).attr("src", "image\\dancingmouse.gif");
            }
            else {
                $(id).attr("src", "image\\Cat_Watching_Mouse.gif");
            }
        }
    }

    function initializeGame() {
        penalty = 0;
        score = 0;
        seed = 0;
        time = 0;
        interval = 3000;
    }

    function isGameOver() {
        for (var I = 0; I < 9; I++)
            if (board[I] == true)
                penalty++;
        return (penalty > 10);
    }

    function gameOver() {
        $("#playGround").fadeOut("fast", function () {
            $("#gameOver").fadeIn("fast");
        });
        $("#gameOverMessage").html("Game Over <br> Your score is " + score);
        $("#scoreText").val(0);
        board = [false, false, false, false, false, false, false, false, false];
        showImageByBoard();
    }

    function resetNextTurn() {
        board = [false, false, false, false, false, false, false, false, false];
        time++;
        seed++;
        for (var I = 0; I < seed; I++) {
            board[Math.floor(Math.random() * 10)] = true;
        }
        showImageByBoard()
    }

    function continueGame() {
        if (isGameOver() == true) {
            gameOver();
            return;
        }

        resetNextTurn();
        if (interval > 500) {
            interval -= 50;
        }
        setTimeout(continueGame, interval);
    }


    // After window loaded
    $(window).load(function () {
        SoundManager.addEventToPlayBackgroundSoundInLoop();
        SoundManager.playBackgroundSound();
    });

    // Start Game
    $("#start").click(function () {
        $("#gameOver").fadeOut("fast", function () {
            $("#playGround").fadeIn("fast");
        });

        SoundManager.playWhistle();
        initializeGame();
        continueGame();
    });

    // After Click on Running Game
    $("input.modify").click(function () {
        var pathRecent = $(this).attr("src");
        var pathNext;
        var imageNo = $(this).attr("id")[3];

        if (board[imageNo] == true) {
            SoundManager.playRatDeath();
            board[imageNo] = false;
            score++;
            pathNext = "image\\catnmos.gif";
        }
        else {
            SoundManager.playCatMeow();
            pathNext = pathRecent;
            penalty++;
        }
        $(this).attr("src", pathNext);
        $("#scoreText").val(score);
    });
});