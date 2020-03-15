
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'dam',
        //     age: 36
        // })
        reject('something went wrongs')
    },5000)
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log('error: ', err)
});

console.log('after');