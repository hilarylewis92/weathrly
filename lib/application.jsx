require('./api-scripts')
const React = require('react');
const ReactDOM = require('react-dom');

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      location: ""
    };
  }
  searchData(){
  };

  render(){
    return (
      <section>
        <article>
          <h1 className="title"> Weathrly App! </h1>
            <input className="input-field" placeholder="Enter Location" onChange={this.setState.location}/>
            <input className="input-field" placeholder="Enter Date" onChange={this.setState.date}/>
            <button id="submit-btn" onClick={() => this.searchData()}> Submit </button>
        </article>
        <article>
          <span id="city"> City </span>
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

ReactDOM.render(<Application />, document.getElementById('app'));

module.exports = Application
