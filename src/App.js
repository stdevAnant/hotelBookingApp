import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import LoginScreen from './screens/login'
import cities from './screens/cities'
import SearchScreen from  './screens/search'
import Hotel from './screens/hotel'
import Profile from './screens/profile'

import {ProtectedRoute} from './helper/protectedRoute'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{backgroundColor:'orange',paddingLeft:20,paddingRight:20,borderRadius:25}}>Book a Ticket</h1>
       
      <Switch>
        <Route exact path='/' component={LoginScreen}></Route>
        <Route path='/cities' component={cities}></Route>
        <Route path='/search' component={SearchScreen}></Route>
        <Route path='/hotel' component={Hotel}></Route>
        <Route path='/profile' component={Profile}></Route>

      </Switch>
      </header>
    </div>
  );
}

export default App;
