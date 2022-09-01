
let audioElem = document.querySelector('audio')
let timeElem = document.querySelector('#time')
let musicsSrc = [
    'media/1.mp3',
    'media/2.mp3',
    'media/3.mp3',
    'media/4.mp3',
    'media/5.mp3',
    'media/6.mp3',
    'media/7.mp3',
    'media/8.mp3',
    'media/9.mp3',
    'media/10.mp3',
]
let audioIndex = 0


function timeMinuMusicHandler(){
    audioElem.currentTime -= 5

}

function previousMusicHandler(){
    audioIndex --

    if (audioIndex < 0  ){
        audioIndex = 9 
    }
     audioElem.setAttribute('src',musicsSrc[audioIndex] )
    console.log(musicsSrc[audioIndex] ) 
        playHandler()

}

function playHandler(){
    audioElem.play()
    console.log('played')

    setInterval(function() {
        if(audioElem.currentTime < 10){
          timeElem.innerHTML = '00 :' + '0'+ Math.floor(audioElem.currentTime)
        }else{
          timeElem.innerHTML = '00 :' + Math.floor(audioElem.currentTime)
        }   
          }, 1000);
}

function pauseHandler(){
    audioElem.pause()
    console.log('paused')
  }

  function nextMusicHandler(){
    audioIndex++ 

    if (audioIndex > musicsSrc.length - 1  ){
        audioIndex = 0
    }
     audioElem.setAttribute('src',musicsSrc[audioIndex] )
    console.log(musicsSrc[audioIndex] ) 
        playHandler()
  }

  function musicSpeedHandler(){
    audioElem.playbackRate = 2
  console.log('music speed : 2x')

  }

  function timePlusMusicHandler(){
      audioElem.currentTime += 5
  }

  function currentTimeHandler(){
    console.log('currentTime:', Math.floor(audioElem.currentTime))
  } 