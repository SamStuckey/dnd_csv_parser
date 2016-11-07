import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

class App extends React.Component{
  render () {
    return (
      <div className="app-wrapper">
        Hello World
      </div>
    );
  }
}
// {this.props.children}

class Routes extends React.Component{
  render () {
    return (
      <div>Hello World from the Router</div>
    );
  }
}
// <Router history={ hashHistory }>
//   <IndexRoute component={ App }/>
//   <Route path="/" component={ App }>
//   </Route>
// </Router>
// <Route path="search" component={ Search }/>
// <Route path="create" component={ Create }/>

export default Routes;
