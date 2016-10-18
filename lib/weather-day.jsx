const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');

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

module.exports = WeatherDay
