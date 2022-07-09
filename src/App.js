import './App.css';
import React from 'react';
import Component from './components/Component';

export default function App() {
  const url = 'http://localhost:7070/';
  return (
    <div className="main-page">
      <Component url={`${url}data`}/>
      <Component url={`${url}error`}/>
      <Component url={`${url}loading`}/>
    </div>
  );
}
