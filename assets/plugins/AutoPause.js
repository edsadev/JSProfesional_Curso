class AutoPause {
  constructor(){
    this.threshold = 0.25
    this.handleIntersection = this.handleIntersection.bind(this)
    this.handleVisibility = this.handleVisibility.bind(this)
  }
  run(player){
    this.player = player
    const observer = new IntersectionObserver(this.handleIntersection,{
      threshold: this.threshold//Umbral
    })

    observer.observe(this.player.media)

    document.addEventListener('visibilitychange', this.handleVisibility)  
  }

  handleIntersection(entries){
    //console.log(entries)
    const entry = entries[0]
    // console.log(entry)

    const isVisible = entry.intersectionRatio >= this.threshold

    if (isVisible){
      this.player.play()
    } else {
      this.player.pause()
    }
  }

  handleVisibility(){
    const isVisible = document.visibilityState === 'visible'
    if (isVisible){
      this.player.play()
    } else {
      this.player.pause()
    }
    (isVisible)
      ? this.player.play()
      : this.player.pause()
  }
}
export default AutoPause