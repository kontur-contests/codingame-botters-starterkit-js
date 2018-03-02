export default class State {
    constructor(gold, enemyGold, roundType, units, initData) {
        this.gold = gold
        this.enemyGold = enemyGold
        this.roundType = roundType
        this.units = units
        this.initData = initData
    }

    makeCopy() {
        return new State(
            this.gold,
            this.enemyGold,
            this.roundType,
            this.units.map(u => u.makeCopy()),
            this.initData
        )
    }
}