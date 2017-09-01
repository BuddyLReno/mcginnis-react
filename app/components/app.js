const React = require('react');
const Popular = require('./popular');
const ReactRouter = require('react-router-dom');
const Nav = require('./nav');
const Home = require('./home');
const Battle = require('./battle');
let Router = ReactRouter.BrowserRouter;
let Route = ReactRouter.Route;
let Switch = ReactRouter.Switch;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="MainApp">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/popular" component={Popular} />
            <Route render={() => {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
