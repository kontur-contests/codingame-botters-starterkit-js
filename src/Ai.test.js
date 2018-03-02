import test from 'ava'
import Ai from './Ai'
import StateReader from './StateReader'
import Countdown from './Countdown'

const testCase = {
    initData: "init|data",
    input: "some|input|",
    expectedOutput: "Command"
}

test('Ai does what is expected', t => {
    const ai = new Ai()
    const nextMove = ai.getNextMove(StateReader.read(testCase.initData, testCase.input), new Countdown(5))
    // t.log(nextMove)
    t.is(nextMove, testCase.expectedOutput)
})