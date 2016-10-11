function getAllWeather() {
  $.get('http://weatherly-api.herokuapp.com/api/weather', function(data) {
    console.log(data);
  });
}
