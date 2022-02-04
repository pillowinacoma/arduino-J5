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
    let temperature = 0

    // 6 => BLue  / AC
    // 4 => Green / Good
    // 2 => Red   / Heating
    const leds = [6, 4, 2].map((n) => ({ isOn: false, led: new Led(n) }))

    const thermometer = new Thermometer({
        controller: 'TMP36',
        pin: 'A4',
    })

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

                mode == 'manual' &&
                    leds.forEach((l) => {
                        l.led.off()
                        l.isOn = false
                    })
                break
            case 'setAc':
                if (mode == 'manual') {
                    params.value && leds.at(0).led.on()
                    !params.value && leds.at(0).led.off()
                    leds.at(0).isOn = params.value
                }
                break
            case 'setHeating':
                if (mode == 'manual') {
                    params.value && leds.at(2).led.on()
                    !params.value && leds.at(2).led.off()
                    leds.at(2).isOn = params.value
                }
                break
        }
    })

    thermometer.on('change', () => {
        const { celsius } = thermometer
        if (mode === 'automatic') {
            temperature = celsius
            leds.forEach((l) => {
                l.led.off()
                l.isOn = false
            })
            leds.at(celsius > 25 ? 0 : celsius < 20 ? 2 : 1).led.on()
            leds.at(celsius > 25 ? 0 : celsius < 20 ? 2 : 1).isOn = true
        } else if (mode === 'manual') {
            temperature = celsius
        } else if (mode === 'off') {
            leds.forEach((l) => {
                l.led.off()
                l.isOn = false
            })
        }
    })

    setInterval(() => {
        socket.emit('temperature', { value: temperature })
    }, 1000)

    var button = new five.Button('A2')

    button.on('press', function () {
        socket.emit('changeMode', { mode })
        mode = nextMode(mode)
    })

    board.repl.inject({
        leds,
        button,
        socket,
    })
})
