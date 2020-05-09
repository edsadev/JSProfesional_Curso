// https://github.com/platzi/javascript-profesional/tree/master/website/ejercicios
import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const player = new MediaPlayer({ el: video, 
  plugins: [
    // new AutoPlay()
    
  ], 
})

const playButton = document.getElementById('playB')
// Reproduce y detiene el video 
playButton.onclick = () => player.togglePlay()

const muteButton = document.getElementById('muteB')
muteButton.onclick = () => player.toggleMute()