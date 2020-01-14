// fn tra ve ket qua ngay lap tuc
function add(a, b) {
  return a + b;
}

// fn tra ve ket qua sau 2s
function asyncAdd(a, b) {
  return new Promise(function (resolve, reject) {

    setTimeout(function () { // mo phong tien trinh goi 1 API
      if (typeof a !== "number" || typeof b !== "number") {
        reject("Input is invalid") // ==> catch
      } else {
        resolve(a + b); // fullfilled, success ==> then
      }
    }, 2000)

  })
}


// su dung ham asyncAdd bang promise binh thuong
// 1 + 2 + 3 + 4 + 5 + 6
// asyncAdd(1, 2)
//   .then(function (res) {
//     console.log("sum 1: ", res)
//     asyncAdd(res, 3)
//       .then(function (res) {
//         console.log("sum 2: ", res)
//       })
//   })

// Promise chaining
asyncAdd(1, 2)
  .then(function (res) {
    console.log("sum 1: ", res)
    return asyncAdd(res, "3")
  })
  .then(function (res) {
    console.log("sum 2: ", res)
    return asyncAdd(res, 4)
  })
  .then(function (res) {
    console.log("sum 3: ", res)
  })
  .catch(function (err) {
    console.log(err)
  })