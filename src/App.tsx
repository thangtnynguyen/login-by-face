import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routers from './router';

function App() {
  return (
    <RouterProvider router={routers} />
  );
}

export default App;
