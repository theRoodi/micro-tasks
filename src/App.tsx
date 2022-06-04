import React from 'react';
import './App.css';
import {FirstWeek, topCars} from './first-week/FirstWeek';

function App() {
  return (
      <div>
        <FirstWeek topCars ={topCars}/>
      </div>
  );
}

export default App;
