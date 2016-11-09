import React from 'react';
import NavBar from './nav_bar';

class App extends React.Component{
  render () {
    return (
      <div className="app-wrapper">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
