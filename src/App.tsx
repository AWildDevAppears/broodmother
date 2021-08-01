import React from 'react';
import './App.css';
import './css/list.css';
import BroodStats from './components/BroodStats';

function App() {
  return (                                                                                 
    <div className="app">
      <menu className="side-menu">
        <BroodStats></BroodStats>
      </menu>
      <main className="main-body"></main>
    </div>
  );
}

export default App;
      