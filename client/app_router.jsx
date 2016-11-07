import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

class App extends React.Component ({
  render () {
    return (
      <div className="app-wrapper">
        Hello World
      </div>
    );
  }
})
// {this.props.children}

const Routes = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
    </Route>
  </Router>
);
// <IndexRoute component={ Search }/>
// <Route path="search" component={ Search }/>
// <Route path="create" component={ Create }/>

export default Routes;
