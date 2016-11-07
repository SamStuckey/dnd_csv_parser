import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Search from './components/search';

class App extends React.Component{
  render () {
    return (
      <div className="app-wrapper">
        {this.props.children}
      </div>
    );
  }
}

class Routes extends React.Component{
  render () {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Search }/>
          <Route path="search" component={ Search }/>
        </Route>
      </Router>
    );
  }
}
// <Route path="create" component={ Create }/>

export default Routes;
