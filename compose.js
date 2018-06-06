function add(x, y) {
    return x + y
}

function double(z) {
    return z * 2
}

const middlewares = [add, double]
let len = middlewares.length

function compose(middle) {
    return (...args) => {
        let res = middle[0](...args)
        for (let i = 1; i < len; i++) {
            res = middle[i](res)
        }
        return res
    }
}

const fn = compose(middlewares)
console.log(fn(1, 2))
