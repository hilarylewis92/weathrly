const React = require('react');
const ReactDOM = require('react-dom');


//create a react component to house the inputs, title, and submit button
// var Weathrly = React.createClass{
//   render: function(){
class InputForm extends React.Component {
  render(){
    return (
      <div>
        <h1 className="title"> Weathrly App! </h1>
          <input className="input-field" placeholder="Enter Location"/>

          <button id="submit-btn"> Submit </button>
      </div>
    )
  }
}

ReactDOM.render(<InputForm />, document.getElementById('app'));

module.exports = InputForm
