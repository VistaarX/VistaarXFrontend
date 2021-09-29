import React from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Login/Login'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Router className="App">
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <LandingPage/>
        </Route>
      </Switch>
    </Router>
    </div>
  )
}

export default App

