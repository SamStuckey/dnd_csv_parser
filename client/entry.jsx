import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './app_router';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Routes/>, root);
});
