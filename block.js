var Block = function(position) {
  var p = position
  var image = imageFromPath('block.png')
  var o = {
    image: image,
    x: p[0],
    y: p[1],
    w: 40,
    h: 40,
    alive: true,
  }

  o.kill = function() {
    o.alive = false
  }
  o.collide = function(ball) {
    return rectIntersect(o, ball) || rectIntersect(ball, o)
  }
  return o
}
