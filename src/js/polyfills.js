Math.randomRange = function (min, max) {
    return min + Math.random() * (max - min);
}

Array.prototype.fish = function () {
    if (this.length == 0)
        return null;
    let idx = Math.floor(Math.randomRange(0, this.length));
    let el = this[idx];
    this.splice(idx, 1);
    return el;
}

Array.prototype.random = function () {
    if (this.length == 0)
        return null;
    let idx = Math.floor(Math.randomRange(0, this.length));
    return this[idx];
}

Array.iota = function (start, end) {
    let step = (end - start) / Math.abs(end - start);
    let result = [];
    for (let i = start; i !== (end + step); i += step)
        result.push(i);
    return result;
}

Array.prototype.shuffle = function () {
    let indices = Array.iota(0, this.length - 1);
    let result = [];
    while(indices.length >0) {
        let idx = indices.fish();
        result.push(this[idx]);
    }
    return result;
}