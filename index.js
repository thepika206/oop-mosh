function StopWatch() {
    // private props and methods
    let isStarted = false;
    let duration = 0;
    let timerId = null;

    // public props and methods
    this.start = () => {
        if (isStarted) {
            throw new Error('already started')
        } else {
            isStarted = !isStarted;
            timerId = setInterval(
                () => {
                    duration += 1;
                },
                100
            )
            
        }
    }

    this.stop = () => {
        if (!isStarted) {
            throw new Error('already stopped')
        } else {
            isStarted = !isStarted
            clearInterval(timerId)
        }
    }

    this.reset = () => {
        duration = 0
    }

    // define getter for duration
    Object.defineProperty(this, 'duration', {
        get: function() {
            return `time: ${duration * 0.1}`
        }
    })
}

const sw = new StopWatch