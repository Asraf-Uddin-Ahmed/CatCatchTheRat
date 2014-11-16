


$(function () {

    var board = [false, false, false, false, false, false, false, false, false];

    var penalty = 0;
    var score = 0;
    var seed = 3;
    var time = 0;
    var interval = 3000;

    function checkGameOver() {
        //Game Over & re-initialize for next game
        if (penalty > 10) {
            alert("game over\n" + "your score is " + score);
            score = 0;
            penalty = 0;
            time = 0;
            interval = 3000;
            seed = 0;
            initialize();
            seed = 3;
            document.getElementById("scoreText").value = score;
            return true;
        }
        return false;
    }

    function initialize() {
        board = new Array(false, false, false, false, false, false, false, false, false);

        for (var I = 0; I < seed; I++)
            board[Math.floor(Math.random() * 10)] = true;

        //document.getElementById("scoreText").value = "";
        for (var I = 0; I < 9; I++) {
            var id = "img" + I;
            if (board[I] == true) {
                //document.getElementById("scoreText").value = document.getElementById("scoreText").value+", "+I;
                document.getElementById(id).src = "image\\dancingmouse.gif";
            }
            else {
                document.getElementById(id).src = "image\\Cat_Watching_Mouse.gif";
            }
        }
    }

    function start() {

        for (var I = 0; I < 9; I++)
            if (board[I] == true)
                penalty++;

        if (checkGameOver() == true)
            return;
        initialize();

        if (interval > 500)
            interval -= 50;
        seed++;
        time = time + 1;
        //document.getElementById('scoreText').value = time;
        setTimeout(start, interval);
    }

    function changeState(id) {
        var pathRecent = document.getElementById(id).src;
        var pathNext;
        var imageNo = id[3];

        if (board[imageNo] == true) {
            board[imageNo] = false;
            score++;
            pathNext = "image\\catnmos.gif";
        }
        else {
            pathNext = pathRecent;
            penalty++;
        }
        document.getElementById(id).src = pathNext;
        document.getElementById("scoreText").value = score;
    }



    $("#start").click(function () {
        start();
    });

    $("input.modify").click(function () {
        changeState($(this).attr("id"));
    });
});