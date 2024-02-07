import React from 'react';
import Router from './app/Router';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Router />
      <Outlet />
    </div>
  )
}

export default App;