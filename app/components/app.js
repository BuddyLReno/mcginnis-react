const React = require('react');
const Popular = require('./popular');

class App extends React.Component {
  render() {
    return (
      <div className="MainApp">
        <Popular />
      </div>
    );
  }
}

module.exports = App;
