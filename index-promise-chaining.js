const axios = require('axios');

// Callback (ES5) ==> de sinh ra callback hell
// Promise (ES6) ==> goi callback
// Promise chaining ==> giai quyet callback hell
// Async await (ES7) ==> Promise

// promise: 3 trang thai
// _ pending
// _ fullfilled/success ==> then==> body (request) = res.data (axios)
// _ rejected ==> catch
axios.get("https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=Japan")
  .then(function (res) {
    console.log(res.data)

    const lat = res.data.results[0].geometry.location.lat;
    const lng = res.data.results[0].geometry.location.lng;

    console.log(lat, lng)

    return axios.get(`https://api.darksky.net/forecast/b8164e69c9f7fbc654f20d2d6381d1fc/${lat},${lng}`)
    // .then()
  })
  .then(function (res) {
    console.log(res.data.currently)
    return axios.get("......")
  })
  .catch(function (err) {
    console.log(err)
  })
