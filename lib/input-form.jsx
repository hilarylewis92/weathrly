const React = require('react');
const ReactDOM = require('react-dom');


//create a react component to house the inputs, title, and submit button
// var Weathrly = React.createClass{
//   render: function(){
class InputForm extends React.Component {
  render(){
    return (
      <section>
        <article>
          <h1 className="title"> Weathrly App! </h1>
            <input className="input-field" placeholder="Enter Location"/>
            <input className="input-field" placeholder="Enter Date"/>
            <button id="submit-btn"> Submit </button>
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

ReactDOM.render(<InputForm />, document.getElementById('app'));

module.exports = InputForm
