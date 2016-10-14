const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');


class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      location: '',
      temperature: ''
    };
  }

  updateInputValueInState(e){
    this.setState({location: e.target.value});
  }

  searchData(e){

    e.preventDefault();
    $.get(this.props.source + this.state.location, function(data){
      console.log(data)
      this.setState({
        info: data
      });
    }.bind(this));
  }

  render(){
    return (
      <section>
        <article id="input-form">
          <h1 className="title"> {this.props.title} </h1>
          <input className="input-field" type='text' placeholder="Enter Location" value={this.state.location} onChange={this.updateInputValueInState.bind(this)}/>
          <input id="submit-btn" type='submit' onClick={this.searchData.bind(this)} />
        </article>
      </section>
    );
  }
}

const Weather = ({location, temperature, type, chance})=> {
  return(
    <article id="weather-display">
      <span id="city">{this.state.location}</span>
      <span id="temperature"> Temp </span>
      <span id="weather"> Weather Type </span>
      <span id="chance"> Weather Type </span>
      <img src="#"/>
    </article>
  );
}

ReactDOM.render(<Application title='Weathrly App' source='https://weatherly-api.herokuapp.com/api/weather/'/>, document.getElementById('app'));

module.exports = Application
