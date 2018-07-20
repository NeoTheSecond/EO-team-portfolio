import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Who from './components/Who'
import Skills from './components/Skills'
import {NavLink, Switch} from 'react-router-dom'
import './components/styles/app.css'


export default class App extends React.Component {
  render() {
    return(
        <Router>
            <div>
                <div className='links'>
                    <NavLink exact to="/" className="link">Home</NavLink>
                    <NavLink to="/who" className="link">Who</NavLink>
                    <NavLink to="/skills" className="link">Skills</NavLink>
                </div>
                {/* routes */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/who" component={Who} />
                    <Route path="/skills" component={Skills} />
                    <Route render={ () => <h1>404 Error</h1> } />
                </Switch>
            </div>
        </Router>

    )
  }
}
