const request = require("request");

request({
  uri: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=459%20su%20van%20hanh",
  json: true
}, function (err, req, body) {
  console.log("address: ", body.results[0].formatted_address);


  const lat = body.results[0].geometry.location.lat;
  const lng = body.results[0].geometry.location.lng;


  request({
    uri: "https://api.darksky.net/forecast/b8164e69c9f7fbc654f20d2d6381d1fc/10.7689455,106.6708739",
    json: true
  }, function (err, req, body) {
    console.log(body)


  })


})



// x = request("hdjsbnfhsdnbfhjbsdhjbhj")
// console.log(x)