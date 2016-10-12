const React = require('react');
const ReactDOM = require('react-dom');


//create a react component to house the inputs, title, and submit button
// var Weathrly = React.createClass{
//   render: function(){
class Weathrly extends React.Component {
  render(){
    return(
      <h1 className="title">Weathrly App!</h1>;
      <input className="InputFieldLocation" type="text" placeholder="Input Location" />;
    )
  }
};
ReactDOM.render(<Weathrly />, document.getElementById('app'));


// class InputField extends React.Component {
//   render () {
//     return <input className="InputFieldLocation" type="text" placeholder="Input Location" />;
//   }
// }
//
// ReactDOM.render(<InputField  />, document.getElementById('location-input'))
//
// module.exports = InputField
module.exports = Weathrly
