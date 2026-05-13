const soundBtn = document.querySelector("#soundBtn");

function playSound() {

    const audio = document.querySelector("#audio");
    
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}

soundBtn.addEventListener("click", () => {
    playSound();
});
