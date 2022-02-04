type Mode = 'automatic' | 'manual' | 'off'

interface TemperatureHistory {
    value: number
    time: Date
}
interface Devices {
    ac: boolean
    heating: boolean
}
