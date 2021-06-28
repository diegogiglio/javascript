const myFunc = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(console.log('meu resultado assincrono 1'))}, 3000)

    })
    
}

const myFunc2 = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(console.log('meu resultado assincrono 2'))

        }, 1000)
        
    })
}

const callFunc = async ()=>{
    await myFunc(), myFunc2()
}

callFunc()