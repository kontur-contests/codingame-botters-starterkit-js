import BaseStateReader from './BaseStateReader'
import { InitData, default as State } from './State'

export default class StateReader extends BaseStateReader {
    constructor(input) {
        super(typeof input === 'string' ? input : readline)
    }

    readInitData() {
        //let size = this.readInt()
        //let unitsPerPlayer = this.readInt()
        return new InitData()
    }


    readState(initData) {
        //let actionCount = this.readInt();
        //...
        this.flushInputToLog();
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