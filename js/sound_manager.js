
SoundManager = function () {
    var objToReturn = {};

    /*
    PRIVATE
    */
    var clickSound = new Audio("sounds/click.mp3");
    var whistleSound = new Audio("sounds/whistle.mp3");
    var deleteSound = new Audio("sounds/delete_sound.wav");
    var backgroundSound = new Audio("sounds/monsters_are_here.mp3");
    var tadaSound = new Audio("sounds/tada.wav");

    function playClick() {
        clickSound.play();
    }

    function playWhistle() {
        whistleSound.play();
    }

    function playDeleteSound() {
        deleteSound.play();
    }

    function playTadaSound() {
        tadaSound.play();
    }

    function playBackgroundSound() {
        backgroundSound.play();
    }

    function pauseBackgroundSound() {
        backgroundSound.pause();
    }

    function addEventToPlayBackgroundSoundInLoop() {
        backgroundSound.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }

    /*
    PUBLIC
    */
    objToReturn.playClick = playClick;
    objToReturn.playWhistle = playWhistle;
    objToReturn.playDeleteSound = playDeleteSound;
    objToReturn.playTadaSound = playTadaSound;
    objToReturn.playBackgroundSound = playBackgroundSound;
    objToReturn.pauseBackgroundSound = pauseBackgroundSound; 
    objToReturn.addEventToPlayBackgroundSoundInLoop = addEventToPlayBackgroundSoundInLoop;

    return objToReturn;
}();