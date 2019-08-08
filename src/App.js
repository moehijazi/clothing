import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import { Switch,Route } from 'react-router-dom';

const HatsPage = () =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div >
      <Route exact path='/' component= {Homepage} />
      <Route path='/hats' component = {HatsPage} /> 
    </div>
  );
}

export default App;
