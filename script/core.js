let button = document.querySelector('button')
let audio = document.querySelector('audio')

console.log(audio)

button.addEventListener('click', function() {

    if (audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }
    button.classList.toggle('paused')
})

audio.hidden = true;
button.hidden = false