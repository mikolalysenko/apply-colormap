apply-colormap
==============
Applies a color map to an ndarray.

# Example

```javascript
var imshow = require("ndarray-imshow")
var colorize = require("apply-colormap")
var fill = require("ndarray-fill")
var zeros = require("zeros")

var x = zeros([512, 512])
fill(x, function(a,b) {
  return a*a + b*b
})

imshow(colorize(x))
```

# Install

```
npm install apply-colormap
```

# API

### `require("apply-colormap")(array[, options])`
Applies a colormap to an ndarray

* `array` is an ndarray
* `options` is an object containing a list of properties to apply to the array

    + `colormap` determines the colormap to use (default "jet").  Names are consistent with the [`colormap`](https://www.npmjs.org/package/colormap) package.
    + `min` determines the lowest color in the image 
    + `max` determines the highest color in the image
    + `outBuffer` is an optional buffer into which the output is written

**Returns** An ndarray representing the colorized image or volume

# Credits
(c) 2014 Mikola Lysenko. MIT License