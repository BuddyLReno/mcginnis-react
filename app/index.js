import "./stylesheets/index.scss";

const React = require('react');
const ReactDOM = require('react-dom');
let App = require('./components/app');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
