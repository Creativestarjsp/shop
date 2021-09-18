
import React from 'react';
import './App.css';

import {Switch,Route} from 'react-router'
import Home from './components/Home'
import About from './components/About';
import contact from './components/contact';
import Header from './components/common/Header';

import Details from './components/common/Details';

function App() {
  return (
   <>
   <React.Fragment>
   <Header/>
     <Switch>
  
       <Route component={Home} path="/" exact />
       <Route component={About} path="/About"/>
       <Route component={contact} path="/contact" />
       <Route component={Details} path="/Details/:id"  />
  
     </Switch>
   </React.Fragment>
   </>
  )
}

export default App;
