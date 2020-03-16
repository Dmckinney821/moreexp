
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'dam',
        //     age: 36
        // })
        // reject('something went wrongs')
    },5000)
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).then(() => {
    console.log('does this run or nah?')
}).catch((err) => {
    console.log('error: ', err)
});

console.log('after');