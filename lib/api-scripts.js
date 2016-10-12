const $ =require('jquery');

function getAllWeather() {
  $.get('http://weatherly-api.herokuapp.com/api/weather/denver', function(data) {
    console.log(data);
  });
}

getAllWeather();

module.exports = getAllWeather;
