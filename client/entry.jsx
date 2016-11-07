import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './app_router';

document.addEventListener('DOMContentLoaded', () => {
  root = document.getElementById('root');
  ReactDom.render(Routes, root);
});
