const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');
const LocationForm = require('./location-forms');
const WeatherDay = require('./weather-day');
const WeatherDisplay = require('./weather-display');



class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      location: ''
    };
  }

componentDidMount() {
  if(localStorage.key){
    var storedData = JSON.parse(localStorage.getItem('key'));
    this.setState ({ weather: storedData});
  }else{
    this.setState ({ weather: []});
    }
  }

  updateInputValueInState(e){
      this.setState({location: e.target.value});
   }

  getAPIData(){
    if(this.state.location === 'denver' || this.state.location === 'san-diego' || this.state.location === 'san-fransico' || this.state.location === 'castle-rock'){
      $.get(this.props.source + this.state.location, function(data){
        this.setState({
          weather: data,
        },localStorage.setItem('key', JSON.stringify(data)));
      }.bind(this));
    }else{
      alert('This is not a valid location. Please enter one of the following locations: (denver, san-diego, san-fransico, or castle-rock)');
    }
  }
  render(){
    return (
      <section>
        <article id="input-form">
          <h1 className="title"> {this.props.title} </h1>
          <LocationForm location={this.state.location} onLocationChange={this.updateInputValueInState.bind(this)} onLocationSubmit={this.getAPIData.bind(this)}/>
        </article>
        <article>
          <h2 className="heading">{this.props.heading}</h2>
          <WeatherDisplay weekInfo={this.state.weather} />
        </article>
      </section>
    );
  }
}

ReactDOM.render(<Application title='Weathrly App' heading='Weather Forcast' source='https://weatherly-api.herokuapp.com/api/weather/'/>, document.getElementById('app'));

module.exports = Application
