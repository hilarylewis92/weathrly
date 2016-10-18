const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');
const WeatherDay = require('./weather-day');

class WeatherDisplay extends React.Component {
  render(){
    let weatherInfo = this.props.weekInfo
    return(
      <div>
      {
        weatherInfo.length ? weatherInfo.map(weatherDay=>{
          return (
            <WeatherDay
              type={weatherDay.weatherType.type}
              location={weatherDay.location}
              date={weatherDay.date}
              tempHigh={weatherDay.temp.high}
              tempLow={weatherDay.temp.low}
              chance={weatherDay.weatherType.chance}
              scale={weatherDay.weatherType.scale}
            />
          )
        }).slice(0, 7)
        : null}
      </div>
    );
  }
}

module.exports = WeatherDisplay
