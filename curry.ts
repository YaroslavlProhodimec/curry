const func = (n) => {
    let acc = n
    return function f(i) {
        if (typeof i === 'number') {
            acc += i
            return f
        }
            return acc


    }
}

console.log(func(10)(10)(10)(10))

