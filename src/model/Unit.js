export default class Unit {
    constructor(unitId, team, unitType, pos, attackRange, health, maxHealth, shield, attackDamage, movementSpeed, stunDuration, goldValue, countDown1, countDown2, countDown3, mana, maxMana, manaRegeneration, heroType, isVisible, itemsOwned) {
        this.unitId = unitId
        this.team = team
        this.unitType = unitType
        this.pos = pos
        this.attackRange = attackRange
        this.health = health
        this.maxHealth = maxHealth
        this.shield = shield
        this.attackDamage = attackDamage
        this.movementSpeed = movementSpeed
        this.stunDuration = stunDuration
        this.goldValue = goldValue
        this.countDown1 = countDown1
        this.countDown2 = countDown2
        this.countDown3 = countDown3
        this.mana = mana
        this.maxMana = maxMana
        this.manaRegeneration = manaRegeneration
        this.heroType = heroType
        this.isVisible = isVisible
        this.itemsOwned = itemsOwned
    }

    makeCopy() {
        return new Unit(
            this.unitId,
            this.team,
            this.unitType,
            this.pos,
            this.attackRange,
            this.health,
            this.maxHealth,
            this.shield,
            this.attackDamage,
            this.movementSpeed,
            this.stunDuration,
            this.goldValue,
            this.countDown1,
            this.countDown2,
            this.countDown3,
            this.mana,
            this.maxMana,
            this.manaRegeneration,
            this.heroType,
            this.isVisible,
            this.itemsOwned
        )
    }
}