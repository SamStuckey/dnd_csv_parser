import React from 'react';
import { hashHistory } from 'react-router';

class NavBar extends React.Component{
  _show (destination) {
    hashHistory.push(`/${destination}`);
  }

  render () {
    return (
      <div>
        <a onClick={() => this._show('search')}>Search</a>
        <a onClick={() => this._show('add')}>Add Song</a>
      </div>
    );
  }
}

export default NavBar;
