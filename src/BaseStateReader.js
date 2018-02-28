export default class BaseStateReader {
    constructor(input) {
        return typeof input === 'string'
            ? this.initByStringInput(input)
            : this.initByFuncInput(input)
    }

    initByStringInput(input) {
        const lines = input.split('|')
        let index = 0

        this.readLine = () => index < lines.length ? lines[index++] : null
    }

    initByFuncInput(readLine) {
        this.readLine = () => {
            const lastLine = readLine()
            printErr(lastLine + "|")
            return lastLine
        }
    }

    readInt() {
        return parseInt(this.readLine())
    }

    readInts() {
        return this.readLine().split(/\s+/).map(parseInt)
    }
}