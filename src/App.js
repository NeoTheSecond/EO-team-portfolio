import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Who from './components/Who'
import Skills from './components/Skills'
import {Link} from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return(
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/who">Who</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                </ul>
                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/who" component={Who} />
                <Route path="/skills" component={Skills} />
            </div>
        </Router>

    )
  }
}
