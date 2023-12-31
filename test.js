import whereIsWally from "./wally.js"

const ID = 1

console.log(`[ START ] - whereIsWally(${ID})`)
whereIsWally(1)
    .then((data) => {
        console.log(data)
        console.log(`[ END ] - whereIsWally(${ID})`)
    })

