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
    $.get(this.props.source + this.state.location, function(data){
      console.log(data);
      this.setState({
        weather: data,
      },localStorage.setItem('key', JSON.stringify(data)));
    }.bind(this));
  }
  render(){
    return (
      <section>
        <article id="input-form">
          <h1 className="title"> {this.props.title} </h1>
          <input className="input-field" type="text" placeholder="Enter Location" value={this.state.location} onChange={(e)=>this.updateInputValueInState(e)}/>
          <button id="submit-btn" children="submit" onClick={this.getAPIData.bind(this)} />
        </article>
        <WeatherDisplay weekInfo={this.state.weather} />
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
            <article key={weatherDay.date}>
              <p>{weatherDay.location}</p>
              <p>{weatherDay.temp.high}</p>
              <p>{weatherDay.temp.low}</p>
              <p>{weatherDay.weatherType.type}</p>
              <p>chance: {Math.round(weatherDay.weatherType.chance*100)}%</p>
            </article>
          )
        })
        : null}
      </div>
    );
  }
}

ReactDOM.render(<Application title='Weathrly App' source='https://weatherly-api.herokuapp.com/api/weather/'/>, document.getElementById('app'));

module.exports = Application
