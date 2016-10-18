// const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');

class LocationForm extends React.Component{
  render(){
    return(
      <div>
        <input className="input-field" type="text" placeholder="Enter Location" value={this.props.location} onChange={this.props.onLocationChange}/>
        <button id="submit-btn" children="submit" onClick={this.props.onLocationSubmit} />
      </div>
    )
  }
}

module.exports = LocationForm
