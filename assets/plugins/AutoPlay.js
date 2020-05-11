function AutoPlay (){}

AutoPlay.prototype.run = function (player) {
  if (!player.muted){
    player.muted = true
  }
  player.play()
  console.log(player)
}

export default AutoPlay