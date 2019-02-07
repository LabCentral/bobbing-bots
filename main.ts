let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.setBrightness(127)
basic.forever(function () {
    strip.showBarGraph(1, 6)
})
