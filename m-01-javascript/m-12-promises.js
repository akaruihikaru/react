// [Promises]



// pembuatan
var promisesBaru = new Promise(function (resolve, reject) {
    var x = 10;

    if (x == 10) {
        resolve('Oke');
    } else {
        reject('No');
    }
})

// pakai
// promisesBaru.then(function (value) {
//     console.log(value);
// }, function (reject) {
//     console.log(reject);
// })

promisesBaru
    .then(function (resolve) { console.log(resolve); })
    .catch(function (reject) { console.log(reject); })

