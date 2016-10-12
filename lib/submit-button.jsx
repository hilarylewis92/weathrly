const React = require('react');
const ReactDOM = require('react-dom');


class ActionButton extends React.Component {
  render () {
    return (
        <button className="ActionButton">
          <span>Submit</span>
        </button>
    )
  }
}

ReactDOM.render(<ActionButton  />, document.getElementById('submit'))

module.exports = ActionButton
