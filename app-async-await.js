const axios = require('axios');

async function getGeoAPI(address) {
  try {
    const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=${address}`)
    return {
      lat: res.data.results[0].geometry.location.lat,
      lng: res.data.results[0].geometry.location.lng
    }
  } catch (error) {
    console.log(error)
  }
}

async function getDarkSkyAPI() {
  const geoRes = await getGeoAPI("Korea");
  const lat = geoRes.lat;
  const lng = geoRes.lng;
  try {
    const res = await axios.get(`https://api.darksky.net/forecast/b8164e69c9f7fbc654f20d2d6381d1fc/${lat},${lng}`)
    console.log(res.data.currently)
  } catch (error) {
    console.log(error)
  }
}

getDarkSkyAPI();
