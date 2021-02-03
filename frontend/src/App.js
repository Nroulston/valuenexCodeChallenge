import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import React from 'react'
import CSVImporter from './features/CSVImporter'
// import { CSVReader } from 'react-papaparse'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={CSVImporter}/> 
          </Switch>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
