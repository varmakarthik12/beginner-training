const [k, a, ...rest] = [4, 5, 6, 7]

// console.log({ k, rest });

let newArray = [...rest]

// console.log({ newArray });

const k2 = { j: "sdfg" };

let k5 = { ...k2 }

console.log({ k5 });