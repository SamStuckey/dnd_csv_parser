import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Search from './components/search';
import AddSong from './components/add_song';
import App from './components/app';

class Routes extends React.Component{
  render () {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Search }/>
          <Route path="search" component={ Search }/>
          <Route path="add" component={ AddSong }/>
        </Route>
      </Router>
    );
  }
}
// <Route path="create" component={ Create }/>

export default Routes;
