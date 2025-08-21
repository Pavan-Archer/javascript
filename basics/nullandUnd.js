const obj = {
    a: 1,
    b: null,
    c: undefined,
    d: null
}

const newObj = Object.fromEntries(Object.entries(obj).filter(([_, val])=> val!= null));

// const newObj = Object.entries(obj)

console.log(newObj)

// const nObj = Object.fromEntries(newObj)

// console.log(nObj)
