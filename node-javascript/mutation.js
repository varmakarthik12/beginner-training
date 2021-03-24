// let k = { l: 78 }

// let m = k

// k.l = "Im broken"


// console.log({ k, m });



// let k = { l: 78, l1: { l: 90 } }

// let m = { ...k }

// k.l = "Im broken"
// k.l1.l = "asdfasdf"


// console.log({ k, m });

let k = { l: 78, l1: { l: 90 } }

let m = JSON.stringify(k)
let parrsed = JSON.parse(m)


k.l = "Im broken"
k.l1.l = "asdfasdf"


console.log({ k, m, parrsed });