window.myp5 = p5
const THEMES = {
  red: { url: 'cartas/r.png', color: '#ff0033' },
  green: { url: 'cartas/g.png', color: '#00ff33' },
  blue: { url: 'cartas/b.png', color: '#0033ff' },
}
const downloadButton = document.querySelector('#download')

function cardSketch (settings) {

  return p => {
    const {
      title = '',
      description = '',
      theme = 'red',
      type = 'visual',
      sourceType,
      source,
    } = settings
    const cardImageArea = { x: 64, y: 64, width: 622, height: 452 }
    
    let cardBackgroundImage
    let cardImage
    let cardSound
    let cardSoundFft
    let cardVideo
    let cardVideoReady = false
    let canvas

    p.preload = () => {
      cardBackgroundImage = p.loadImage(THEMES[theme].url)
      if(sourceType === 'image') {
        cardImage = p.loadImage(source)
      } else if(sourceType === 'audio') {
        cardSound = p.loadSound(source)
      }
    }

    p.setup = () => {
      canvas = p.createCanvas(cardBackgroundImage.width, cardBackgroundImage.height)
      canvas.class(type)

      p.image(cardBackgroundImage, 0, 0)

      p.textFont("Source Serif Pro")
      p.textSize(36)
      p.textStyle(p.BOLD)
      p.textAlign(p.LEFT, p.CENTER)
      p.text(title, 80, 594)

      p.textStyle(p.NORMAL)
      p.textAlign(p.LEFT, p.TOP)
      p.text(description, 80, 670, 585)

      if(sourceType === 'image') {
        setupImage()
      } else if(sourceType === 'video') {
        setupVideo()
      } else if(sourceType === 'audio') {
        setupAudio()
      }

      downloadButton.addEventListener('click', downloadCard)
    }

    p.draw = () => {
      if(sourceType === 'video') {
        drawVideo()
      } else if (sourceType === 'audio') {
        drawAudio()
      }
    }

    let setupImage = () => {
      placeImage(cardImage)
      p.noLoop()
    }

    let setupAudio = () => {
      cardSoundFft = new myp5.FFT()
      canvas.mouseClicked(toggleSound)
      cardSound.play()
    }
    
    let setupVideo = () => {
      cardVideo = p.createVideo(source, () => {
        cardVideoReady = true
        cardVideo.loop()
      })
      cardVideo.attribute('muted', true)
      cardVideo.attribute('loop', true)
      cardVideo.attribute('autoplay', true)
      p.frameRate(30)
    }

    let drawAudio = () => {
      if(cardSound.isPlaying()) {
      p.noStroke()
      p.fill(21, 20)
      p.rect(cardImageArea.x, cardImageArea.x, cardImageArea.width, cardImageArea.height)
      
    }
      let waveform = cardSoundFft.waveform()
        p.blendMode(p.ADD)
        p.noFill()
        p.stroke(THEMES[theme].color)
        p.strokeWeight(2)
        p.beginShape()
        for (let i = 0; i < waveform.length; i++){
          let x = p.map(i, 0, waveform.length, cardImageArea.x + 5, cardImageArea.x + cardImageArea.width - 10)
          let y = p.map(waveform[i], -1, 1, 0, cardImageArea.height)
          p.vertex(x, cardImageArea.y + y)
        }
        p.endShape()
        p.blendMode(p.BLEND)
    }

    let drawVideo = () => {
      if(cardVideoReady) {
        placeImage(cardVideo)
      }
    }

    let toggleSound = () => {
      if (cardSound.isPlaying()) {
        cardSound.pause()
      } else {
        cardSound.play()
      }
    }

    let placeImage = function(img) {
      let x, y, cropWidth, cropHeight
      if(img.width/img.height > cardImageArea.width/cardImageArea.height) {
        y = 0
        cropHeight = img.height
        cropWidth = cardImageArea.width/cardImageArea.height*img.height
        x = (img.width-cropWidth)/2
      } else {
        x = 0
        cropWidth = img.width
        cropHeight = cardImageArea.height/cardImageArea.width*img.width
        y = (img.height-cropHeight)/2
      }
      x = parseInt(x)
      y = parseInt(y)
      cropWidth = parseInt(cropWidth)
      cropHeight = parseInt(cropHeight)
      p.copy(img, x, y, cropWidth, cropHeight, cardImageArea.x, cardImageArea.y, cardImageArea.width, cardImageArea.height)
    }

    let downloadCard = () => {
      p.save(`${title}.png`); 
    }
  }
}