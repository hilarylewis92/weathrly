const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {location: ''};
  }
  searchData(e){
    // e.preventDefault();
    $.get(this.props.source + this.state.location, function(){
      console.log(this.state);
    });
  };

  render(){
    return (
      <section>
        <article>
          <h1 className="title"> Weathrly App! </h1>
            <input className="input-field" placeholder="Enter Location" value={this.state.location} onChange={(e)=>this.setState({location: e.target.value})}/>
            <button id="submit-btn" onClick={() => this.searchData()}> Submit </button>
        </article>
        <article>
          <span id="city"> {this.state.location} </span>
          <span id="weather"> Weather Type </span>
          <article>
            <img src="#"/>
            <span id="temperature"> Temp </span>
          </article>
        </article>
      </section>
    )
  }
}

ReactDOM.render(<Application source='https://weatherly-api.herokuapp.com/api/weather/'/>, document.getElementById('app'));

module.exports = Application
