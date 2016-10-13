const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');
require('./styles');

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Location',
      temperature: ''
    };
  }
  searchData(e){
    e.preventDefault();
    $.get(this.props.source + this.state.location, function(data){
      console.log(data);
      var object = data[0].temp.high;
      console.log(object);
      (e) => this.setState({temperature: 'object'});
      // this.setState({
      //   // location: result
      });
    // }.bind(this));
  }
  updateData: function() {
    this.setState ({
      temperature: data[0].temp.high.
      
    })
  }

  render(){
    return (
      <section>
        <article id="input-form">
          <h1 className="title"> Weathrly </h1>
            <input className="input-field" placeholder="Enter Location" value={this.state.location} onChange={(e)=>this.setState({location: e.target.value})}/>
            <button id="submit-btn" onClick={(e) => this.searchData(e)}> Submit </button>
        </article>
        <article id="weather-display" >
          <span id="city"> {this.state.location} </span>
          <span id="temperature" value={this.state.temperature}> {this.state.temperature}</span>
          <span id="weather"> Weather Type </span>
            <img src="#"/>
        </article>
      </section>
    )
  }
}

ReactDOM.render(<Application source='https://weatherly-api.herokuapp.com/api/weather/'/>, document.getElementById('app'));

module.exports = Application
