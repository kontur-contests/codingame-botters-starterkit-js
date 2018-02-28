import StateReader from './StateReader'
import Ai from './Ai'
import Countdown from './Countdown'

const reader = new StateReader()
const initData = reader.readInitData()
const ai = new Ai()

while (true) {
    const state = reader.readState(initData)
    const countdown = new Countdown(45)
    const move = ai.getNextMove(state, countdown)

    printErr(countdown.toString())

    print(move)
}