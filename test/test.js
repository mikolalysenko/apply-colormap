"use strict"

var imshow = require("ndarray-imshow")
var colorize = require("../apply-color-map")
var fill = require("ndarray-fill")
var zeros = require("zeros")

var x = zeros([512, 512])
fill(x, function(a,b) {
  return a*a + b*b
})

imshow(colorize(x))