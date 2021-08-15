import React from 'react';
import './App.css';
import './css/list.css';
import BroodStats from './components/BroodStats';
import { BroodFactory } from './components/BroodFactory';
import MainMenu from './components/MainMenu';

function App() {
  
  return (                                                                                 
    <div className="app">
      <menu className="side-menu">
        <BroodStats></BroodStats>
        <BroodFactory></BroodFactory>
      </menu>
      <main className="main-body">
        <MainMenu></MainMenu>
      </main>
    </div>
  );
}

export default App;
      