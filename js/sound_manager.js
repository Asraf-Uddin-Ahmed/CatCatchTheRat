
SoundManager = function () {
    var objToReturn = {};

    /*
    PRIVATE
    */
    var whistleSound = new Audio("sounds/whistle.mp3");
    var deleteSound = new Audio("sounds/delete_sound.wav");
    var backgroundSound = new Audio("sounds/Chopstick_Slapstick.mp3");
    var tadaSound = new Audio("sounds/tada.wav");
    var ratDeathSound = new Audio("sounds/rat_death.mp3");
    var catMeowSound = new Audio("sounds/cat_meow.wav");

    function playClick() {
        var clickSound = new Audio("sounds/click.mp3");
        clickSound.play();
    }

    function playRatDeath() {
        var clickSound = new Audio("sounds/rat_death.mp3");
        clickSound.play();
    }

    function playCatMeow() {
        var clickSound = new Audio("sounds/cat_meow.wav");
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
    objToReturn.playRatDeath = playRatDeath;
    objToReturn.playCatMeow = playCatMeow;
    objToReturn.playWhistle = playWhistle;
    objToReturn.playDeleteSound = playDeleteSound;
    objToReturn.playTadaSound = playTadaSound;
    objToReturn.playBackgroundSound = playBackgroundSound;
    objToReturn.pauseBackgroundSound = pauseBackgroundSound; 
    objToReturn.addEventToPlayBackgroundSoundInLoop = addEventToPlayBackgroundSoundInLoop;

    return objToReturn;
}();