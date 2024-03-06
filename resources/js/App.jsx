import React from 'react';
import Router from '../app/Router';
import { Outlet } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div className="app">
      <Router />
      <Outlet />
    </div>
  )
}

export default App;
if (document.getElementById('app')) {
  createRoot(document.getElementById('app')).render(<App />)
}