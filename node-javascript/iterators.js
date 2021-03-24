let myArrayBe = [3, 4, 5, 6]

const [, funny] = myArrayBe

console.log({ funny });

for (const val of myArrayBe) {
    console.log({ val });
}

let m = { k: 9, l: 9 }

for (const key in m) {
    const value = m[key];

    // console.log({ key, value });
}

for (const [key, value] of Object.entries(m)) {
    console.log({ somekey: key, value });

}

//  map, filter, reduce, foreach

let mapvalue = myArrayBe.map((val, i) => {
    return i
})

let filterValue = myArrayBe.filter((val, i) => !(val % 2))

console.log({ mapvalue, filterValue });