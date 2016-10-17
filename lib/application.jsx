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
        console.log(data);
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
          <input className="input-field" type="text" placeholder="Enter Location" value={this.state.location} onChange={(e)=>this.updateInputValueInState(e)}/>
          <button id="submit-btn" children="submit" onClick={this.getAPIData.bind(this)} />
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
            <article className="weather-day" key={weatherDay.date}>
                <div className={weatherDay.weatherType.type}>
                  <p className="location">{weatherDay.location}</p>
                  <p className="date">{weatherDay.date}</p>
                  <p>High: {weatherDay.temp.high}&deg; </p>
                  <p>Low: {weatherDay.temp.low}&deg; </p>
                  <p className="weather-type">{weatherDay.weatherType.type}</p>
                  <p>Chance: {Math.round(weatherDay.weatherType.chance*100)}%</p>
                  <img src='#' className={weatherDay.weatherType.type}/>
              </div>
            </article>
          )
        }).slice(0,7)
        : null}
      </div>
    );
  }
}

ReactDOM.render(<Application title='Weathrly App' heading='Weather Forcast' source='https://weatherly-api.herokuapp.com/api/weather/'/>, document.getElementById('app'));

module.exports = Application
