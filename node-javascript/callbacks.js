let m = () => {
    console.log("im lazy");
}

let j = (m) => {
    console.log("before")
    setTimeout(() => {
        m()
    }, 2000)
    console.log("after")
}
j(m)
