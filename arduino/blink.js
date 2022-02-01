const five = require('johnny-five')
const { Board, Led, Sensor } = five
var io = require('socket.io-client')
var socket = io.connect('http://localhost:4000')

const board = new Board()

board.on('ready', function () {
    socket.on('connect', function (socket) {
        console.log('Connected!')
    })
    const leds = [6, 4, 2].map((n) => new Led(n))

    // this.loop(500, () => {
    //     leds[tmp % 3].toggle()
    //     tmp++
    // })

    var sensor = new Sensor('A0')

    // Scale the sensor's data from 0-1023 to 0-10 and log changes
    sensor.on('change', function (d) {
        const index = this.scaleTo(0, 60)
        socket.emit('temperature', { value: index })
        // console.log(
        //     `Level :  ${
        //         index > 25 ? 0 : index < 20 ? 2 : 1
        //     } \t Temperature: ${index}`
        // )
        leds.forEach((l) => l.off())
        leds.at(index > 25 ? 0 : index < 20 ? 2 : 1).on()
    })

    var button = new five.Button('A2')

    let tmp = 0
    button.on('hold', function () {
        leds.forEach((l) => l.off())
        leds.at(tmp % 3).on()
        tmp++
    })

    button.on('press', function () {
        leds.forEach((l) => l.on())
        socket.emit('button')
    })

    button.on('release', function () {
        leds.forEach((l) => l.off())
    })

    board.repl.inject({
        leds,
        sensor,
        button,
        socket,
    })
})
