const five = require('johnny-five')
const { Board, Led, Sensor, Thermometer } = five
var io = require('socket.io-client')

const board = new Board()

const nextMode = (currMode) => {
    const modes = ['automatic', 'manual', 'off']
    const currModeIndex = modes.findIndex((e) => e === currMode)
    const nextModeIndex = (currModeIndex + 1) % modes.length
    return modes.at(nextModeIndex)
}

board.on('ready', function () {
    const socket = io.connect('http://localhost:4000')
    let mode = 'automatic' // automatic manual off

    socket.on('connect', () => {
        socket.send({
            type: 'device',
            value: 'arduino',
        })
    })

    socket.on('order', (data) => {
        const { type, params } = data
        switch (type) {
            case 'chmode':
                mode = params?.mode ?? mode
                console.log(mode)
                break
        }
    })

    const leds = [6, 4, 2].map((n) => new Led(n))

    var sensor = new Sensor('A0')

    // Scale the sensor's data from 0-1023 to 0-10 and log changes
    sensor.on('change', function (d) {
        const index = this.scaleTo(0, 60)
    })

    const thermometer = new Thermometer({
        controller: 'TMP36',
        pin: 'A4',
    })

    thermometer.on('change', () => {
        const { celsius, fahrenheit, kelvin } = thermometer
        if (mode !== 'off') {
            socket.emit('temperature', { value: celsius })
            if (mode === 'automatic') {
                leds.forEach((l) => l.off())
                leds.at(celsius > 25 ? 0 : celsius < 20 ? 2 : 1).on()
            }
        }
    })

    var button = new five.Button('A2')

    button.on('press', function () {
        socket.emit('changeMode', { mode })
        mode = nextMode(mode)
    })

    board.repl.inject({
        leds,
        sensor,
        button,
        socket,
    })
})
