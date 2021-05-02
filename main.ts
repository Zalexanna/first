input.onButtonPressed(Button.A, function () {
    led.toggle(0, 0)
    led.toggle(1, 0)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showString("Hello!")
})
