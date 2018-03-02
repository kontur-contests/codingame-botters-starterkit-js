export default class Item {
    constructor(itemName, itemCost, damage, health, maxHealth, mana, maxMana, moveSpeed, manaRegeneration, isPotion) {
        this.itemName = itemName
        this.itemCost = itemCost
        this.damage = damage
        this.health = health
        this.maxHealth = maxHealth
        this.mana = mana
        this.maxMana = maxMana
        this.moveSpeed = moveSpeed
        this.manaRegeneration = manaRegeneration
        this.isPotion = isPotion
    }
}