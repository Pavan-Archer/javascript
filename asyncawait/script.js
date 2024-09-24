const pavan = async () => {
    console.log("I'm pavan and i'm not waiting")
}

const shon = async () => {
    console.log("I'm shon and i'm not waiting")
}

const main = async() => {
    let a = await pavan()
    let b = await shon()
}

main()
