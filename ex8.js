function duckCount() {
    return [].reduce.call(arguments, (o, v, i) => {
        Object.prototype.hasOwnProperty.call(v, 'quack') ? o++ : null
        return o
    }, 0)
}

module.exports = duckCount
