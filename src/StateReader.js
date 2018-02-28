import BaseStateReader from './BaseStateReader'
import { InitData, default as State } from './State'

export default class StateReader extends BaseStateReader {
    constructor(input) {
        super(typeof input === 'string' ? input : readline())
    }

    readInitData() {
        // let x = super.readInt()
        // let ys = super.readInts()
        return new InitData()
    }


    readState(initData) {
        // let x = super.readInt()
        // let ys = super.readInts()
        return new State()
    }

    /**
     * Для тестов
     */
    static read(init, state) {
        const initData = new StateReader(init).readInitData()
        return new StateReader(state).readState(initData)
    }
}