var log = console.log.bind(console)

var imageFromPath = function(path) {
  var image = new Image()
  image.src = path
  return image
}

var rectIntersect = function(a, b) {
  if (a.y > b.y && a.y < b.y + b.image.height &&
      a.x > b.x && a.x < b.x + b.image.width) {
    return true
  }
  return false
}
