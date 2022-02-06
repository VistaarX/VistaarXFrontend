import React, { useEffect } from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import "./stylesheets/App.css"
import Navbar from './components/Navbar/Navbar'
import Employee  from './components/User/Employee/Employee'
import Catalogue from './components/Catalogue/Catalogue'
import CreatePost from './components/CreatePost/CreatePost'
import Orders from './components/Orders/Orders'
import Network from './components/Network/Network'
import Feed from './components/Feed/Feed'
import Connections from './components/Connections/Connections'
import WorkProfile from './components/User/WorkProfile'


const App = (props) => {
  return (
    <div>
      <Router className="App">
      <Navbar />
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
        <Route path="/user/employee" exact>
          <Employee />
        </Route>
        <Route path="/user/employee/:id" exact>
          <Employee/>
        </Route>
        <Route path="/user" exact>
          <WorkProfile />
        </Route>
        <Route path="/user/:id" exact>
          <WorkProfile />
        </Route>
        <Route path="/catalogue" exact>
          <Catalogue/>
        </Route>
        <Route path="/createPost" exact>
          <CreatePost/>
        </Route>
        <Route path="/orders" exact>
          <Orders/>
        </Route>
        <Route path="/feeds" exact>
          <Feed/>
        </Route>
        <Route path="/network" exact>
          <Network/>
        </Route>
        <Route path="/user/employee/:id/connections" exact>
          <Connections/>
        </Route>
        
      </Switch>
    </Router>
    </div>
  )
}

export default App

//TODO: Add SVG to login page
//TODO: Post data to API
//Add VistaarX svg on signup page 
//Add 4 digit code page