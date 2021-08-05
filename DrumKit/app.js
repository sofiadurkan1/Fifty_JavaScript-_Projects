window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return; //stop the function  {
        audio.currentTime =0;
        audio.play();

        key.classList.add('playing');
    


});

const keys = document.querySelectorAll('.key');

function removeTransition()


keys.forEach(key =>key.addEventListener("transitionend",removeTransition));