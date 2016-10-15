const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');


class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      location: ''
    };
  }

  updateInputValueInState(e){
      this.setState({location: e.target.value});
   }

  getAPIData(e){
    e.preventDefault();
    $.get(this.props.source + this.state.location, function(data){
      console.log(data);
      this.setState({
        weather: data,
        weekday: data[0],
        location: data[0].location,
        temphigh: data[0].temp.high,
        templow: data[0].temp.low,
        weathertype: data[0].weatherType.type,
        chance: data[0].weatherType.chance
      });
    }.bind(this));
  }

  render(){
    return (
      <section>
        <article id="input-form">
          <h1 className="title"> {this.props.title} </h1>
          <input className="input-field" type='text' placeholder="Enter Location" value={this.state.location} onChange={(e)=>this.setState({location: e.target.value})}/>
          <input id="submit-btn" type='submit' onClick={this.getAPIData.bind(this)} />
        </article>
        <WeatherDisplay weekInfo={this.state.weather} temperatureHigh={this.state.temphigh} temperatureLow={this.state.templow} locationInfo={this.state.location} weatherType={this.state.weathertype} weatherChance={this.state.chance}/>
      </section>
    );
  }
}

class WeatherDisplay extends React.Component {
  render() {
  return(
    <article id="weather-display">
      <span id="city"> {this.props.locationInfo} </span>
      <span className="temperature"> High: {this.props.temperatureHigh} </span>
      <span className="temperature"> Low: {this.props.temperatureLow} </span>
      <span id="weather-type"> {this.props.weatherType}</span>
      <span id="chance"> {this.props.weatherChance}</span>
      <img src="../images/Sunny.png"/>
    </article>
    );
  }
}

ReactDOM.render(<Application title='Weathrly App' source='https://weatherly-api.herokuapp.com/api/weather/'/>, document.getElementById('app'));

module.exports = Application
