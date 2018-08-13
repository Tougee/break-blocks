var Ball = function() {
  var image = imageFromPath('ball.png')
  var o = {
    image: image,
    x: 150,
    y: 220,
    speedX: 5,
    speedY: 5,
    fired: false,
  }

  o.fire = function() {
    o.fired = true
  }

  o.rebound = function() {
    o.speedY = -o.speedY
  }

  o.move = function() {
    if (o.fired) {
      if (o.x < 0 || o.x > 400 - o.image.width) {
        o.speedX = -o.speedX
      }
      if (o.y < 0) {
        o.speedY = -o.speedY
      }

      o.x -= o.speedX
      o.y -= o.speedY
    }
  }
  return o
}
