const app = () => {
    const song = document.querySelector('.song')
    const play = document.querySelector('.play')
    const outline = document.querySelector('.moving-outline circle')
    const video = document.querySelector('.vid-container video')

    //-Sounds
    const sounds = document.querySelectorAll('.sound-picker button')

    //time display
    const timeDisplay = document.querySelector('.time-display')

    //get lenght of the outline
    const outlineLength = outline.getTotalLength();
    
    //duration
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    //playsound

    play.addEventListener('click', () => {
        checkPlaying(song)
    })

    const checkPlaying = (song) => {
        if (song.paused){
            song.play()
            play.src = './svg/pause.svg'
            video.play()
        }else{
            song.pause()
            play.src = './svg/play.svg'
            video.pause()

        }
    }

    // we can animated the circle
    song.ontimeupdate = () => {
        let currentTime = song.currentTime
        // console.log(currentTime);
        let elapsed = fakeDuration - currentTime
        // console.log(elapsed);
        let seconds = Math.floor(elapsed % 60)
        let minutes = Math.floor(elapsed / 60)
        console.log(minutes);
        
        // animate the circle
        let progress = outlineLength - (currentTime / fakeDuration)
    }

};

app()