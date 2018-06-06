async function fn1(next) {
    console.log('fn1')
    await next()
    console.log('fn1 end')
}

async function fn2(next) {
    console.log('fn2')
    await next()
    await delay()
    console.log('fn2 end')
}

function fn3() {
    console.log('fn3')
}

function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}


function compose(middlewares) {
    return function () {
        return dispatch(0)

        function dispatch(i) {
            let fn = middlewares[i]
            if (!fn) {
                return Promise.resolve()
            }
            return Promise.resolve(fn(function next() {
                return dispatch(i + 1)
            }))
        }
    }
}

const middlewares = [fn1, fn2, fn3]
const finalFn = compose(middlewares)
finalFn()