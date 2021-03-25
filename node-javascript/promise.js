// Promise
// resolve, reject

let asyncOp = new Promise((res, rej) => {
    setTimeout(() => {
        res("soemthing") //rej
    }, 2000);
})

// //Then
// asyncOp.then((...resolved) => {
//     console.log({ resolved })
// }).catch((caught) => {
//     console.log({ caught })
// })

// async await

const asyncFunc = async () => {

    let resolvedAsyncOp = await asyncOp
    console.log({ resolvedAsyncOp });
    return "executed"
}

console.log({ asyncFunc: asyncFunc() });
