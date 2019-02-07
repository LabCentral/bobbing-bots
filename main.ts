let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.setBrightness(127)
input.setAccelerometerRange(AcceleratorRange.TwoG)
basic.forever(function () {
    strip.showBarGraph(input.acceleration(Dimension.Strength), 2000)
})
