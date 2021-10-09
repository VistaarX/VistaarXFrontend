import React from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import "./stylesheets/App.css"
const App = () => {
  return (
    <div>
      <Router className="App">
      <Switch>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/" exact>
          <LandingPage/>
        </Route>
        <Route path="/signup" exact>
          <Signup/>
        </Route>
      </Switch>
    </Router>
    </div>
  )
}

export default App

//TODO: Add SVG to login page
//TODO: Vertically align login form
//Add handle change functions to onChange event listeners of input fields in both login and sign up forms
//Manage state for form values
//Post data to API