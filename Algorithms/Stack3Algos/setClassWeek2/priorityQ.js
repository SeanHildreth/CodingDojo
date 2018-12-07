class priorityQ {
    constructor() {
        this.queue = {}
    }
    add(val, pn) {
        if(this.queue[pn]) {
            this.queue[pn].push(val);
            return this;
        } else  {
            this.queue[pn] = [];
            this.queue[pn].push(val);
            return this;
        }
    }
    offer() {
        let queueKeys = Object.keys(this.queue);
        console.log("Keys: " + queueKeys)
        for(let idx = 0; idx < queueKeys.length; idx++) {
            if(this.queue[queueKeys[idx]].length > 0) {
                return this.queue[queueKeys[idx]].splice(0, 1);
            }
        }
    }
}

module.exports = priorityQ;