export default class BaseStateReader {
    constructor(input) {
        this.lines = [];

        typeof input === 'string'
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
            const lastLine = readLine();
            this.lines.push(lastLine);
            return lastLine
        }
    }
    
    flushInputToLog(){
        printErr(this.lines.join("|"));
        this.lines = [];
    }

    readInt() {
        return parseInt(this.readLine())
    }

    readInts() {
        return this.readLine().split(/\s+/).map(parseInt)
    }
}