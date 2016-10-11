const $ =require('jquery');

function getAllWeather() {
  $.get('http://weatherly-api.herokuapp.com/api/weather', function(data) {
    console.log(data);
  });
}

getAllWeather();

module.exports = getAllWeather;
