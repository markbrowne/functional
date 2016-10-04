function add(x, y) {
    return x + y
}

var addTen = partiallyApply(add, 13)

console.log(addTen(10))
