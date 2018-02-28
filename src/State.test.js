import test from 'ava'
import State from './State'
import StateReader from './StateReader'

test('Some test', t => {
    const initData = new StateReader("abc|123").readInitData()
    t.log(initData)
    t.pass()
})