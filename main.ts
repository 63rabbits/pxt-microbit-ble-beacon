input.onButtonPressed(Button.A, function () {
    bluetooth.stopAdvertising()
    state += 1
    if (state == 1) {
        bluetooth.advertiseUrl(
        "https://makecode.com",
        7,
        false
        )
    }
    if (state == 2) {
        bluetooth.advertiseUid(
        100,
        200,
        7,
        false
        )
    }
    if (state == 3) {
        bluetooth.advertiseUidBuffer(bufr, 7, false)
    }
    basic.showNumber(state)
    if (state >= 3) {
        state = 0
    }
})
input.onButtonPressed(Button.B, function () {
    bluetooth.stopAdvertising()
    state = 0
    basic.showIcon(IconNames.No)
})
let state = 0
basic.showLeds(`
    . . # # .
    # . # . #
    . # # # .
    # . # . #
    . . # # .
    `)
state = 0
let bufr = pins.createBuffer(16)
for (let index = 0; index <= 15; index++) {
    bufr.setNumber(NumberFormat.Int8LE, index, index + 1)
}
