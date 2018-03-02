export default class InitData {
    constructor(team, staticObjects, items) {
        this.team = team
        this.spawns = staticObjects.filter(x => x.type === 'Spawn')
        this.bushes = staticObjects.filter(x => x.type === 'Bush')
        this.items = items
    }
}