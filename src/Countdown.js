// Taken from https://gist.github.com/electricg/4372563
class Stopwatch {
    constructor() {
        this.startAt = undefined
        this.start()
    }

    static now() {
        return (new Date()).getTime()
    }

    start() {
        if (this.startAt === undefined) {
            this.startAt = Stopwatch.now()
        }
    }

    elapsedMs() {
        return this.startAt === undefined
            ? 0
            : Stopwatch.now() - this.startAt
    }
}

export default class Countdown {
    constructor(ms) {
        this.stopwatch = new Stopwatch()
        this.timeAvailableMs = ms
    }

    isFinished() {
        return this.timeLeftMs() <= 0
    }

    timeLeftMs() {
        return this.timeAvailableMs - this.stopwatch.elapsedMs()
    }

    elapsedMs() {
        return this.stopwatch.elapsedMs()
    }

    toString() {
        return `Elapsed ${this.elapsedMs()} ms. Available ${this.timeAvailableMs} ms`
    }
}