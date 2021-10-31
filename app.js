const nextButton = document.querySelector(".next-button");

//svg mazes
const leveOne = document.querySelector('.level-one');
const levelTwo = document.querySelector('.level-two');
//UI MESSAGES
const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector(".ui-message");
//END GAME
const spookyPicture = document.querySelector(".spooky-picture");
const screameSound = document.querySelector(".scream-sound");

const collisionCheck = (value) => {
    if (value === "maze-border") alert("You lost...try again");
    if (value === "finish") {
        nextButton.style.opacity = 1;
        nextButton.style.pointerEvents = "all";
        leveOne.style.pointerEvents = "none";
    }
    if (value === 'end-game') {
        screameSound.play();
        spookyPicture.style.display ='block';
        document.body.style.background = 'black';
    }
};

window.addEventListener('mousemove', (e) => {
    let check = e.target.classList.value;
collisionCheck(check)
});

nextButton.addEventListener('click', () => {
    leveOne.style.display = "none";
    levelTwo.style.display = "block";
    nextButton.style.opacity = 0;
    nextButton.style.pointerEvents = "none";
    uiLevel.textContent = "Level 2";
    uiMessage.textContent = "One more to go....";
});