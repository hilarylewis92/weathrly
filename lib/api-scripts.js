const $ =require('jquery');

function getAllWeather() {
  $.get('http://weatherly-api.herokuapp.com/api/weather/', function(data) {
    console.log(data);
  });
}

function getLocationDate(location, date) {
  $.get('http://weatherly-api.herokuapp.com/api/weather/' + location , function(data) {
    console.log(data);
  });
}

getAllWeather();

module.exports = getAllWeather;
