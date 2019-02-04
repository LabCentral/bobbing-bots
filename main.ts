let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 11, NeoPixelMode.RGB)
strip.setBrightness(127)
input.setAccelerometerRange(AcceleratorRange.TwoG)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
