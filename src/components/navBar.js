import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Who from './Who'
import Skills from './Skills'
import {NavLink, Switch} from 'react-router-dom'
import './styles/app.css'

export default class NavBar extends React.Component {
  render() {
    return(
        <Router>
            <div>
                <nav className='navbar navbar-default'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <NavLink exact to="/" className="col-lg-4">Home</NavLink>
                            <NavLink to="/who" className="col-lg-4">Who</NavLink>
                            <NavLink to="/skills" className="col-lg-4">Skills</NavLink>
                        </div>

                    </div>
                </nav>
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
