const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');
const LocationForm = require('./location-forms');


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

class WeatherDay extends React.Component{
 render(){
   let weatherExtremeType = <p className='extremeWeather'>WEATHER ALERT</p>;
   return(
     <article className="weather-day" key={this.props.date}>
         <div className={this.props.type}>
           <p className="location">{this.props.location}</p>
           <p className="date">{this.props.date}</p>
           <p>High: {this.props.tempHigh}&deg; </p>
           <p>Low: {this.props.tempLow}&deg; </p>
           <p className="weather-type">{this.props.type}</p>
           <p>Chance: {Math.round(this.props.chance*100)}%</p>
           <p className={this.props.type}></p>
           {this.props.scale === 3 ? weatherExtremeType : null }
       </div>
     </article>
   )
 }
}

ReactDOM.render(<Application title='Weathrly App' heading='Weather Forcast' source='https://weatherly-api.herokuapp.com/api/weather/'/>, document.getElementById('app'));

module.exports = Application
