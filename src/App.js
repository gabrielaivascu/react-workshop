import './App.css';
import React from 'react';
import Cocktails from './cocktail';
import Home from './home';
import About from './about';
import Contact from './contact';

import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Bunic from './context-example/bunic';

export const CadouPentruNepot =  React.createContext("jucarii");

function App() {
  return (
    <BrowserRouter>
    {/* <CadouPentruNepot.Provider value="Jucarii si dulciuri">
    <Bunic/>
    </CadouPentruNepot.Provider> */}
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cocktails">Cocktails</Link></li>
        <li><Link to="/">Home</Link></li>
      </ul>
      <Switch> 
        <Route path="/cocktails" component={Cocktails} />
        <Route path="/about" component={About} />
        <Route path="/about/contact" component={Contact} />
        <Route path="/" component={Home} /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
