export default class Ai {
    getNextMove(state, countdown) {
        return state.roundType < 0
            ? 'IRONMAN'
            : 'ATTACK_NEAREST UNIT'
    }
}