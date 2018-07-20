import React from 'react'
import ReactDOM from 'react-dom'
import './styles/home.css'
import PageTransition from 'react-router-page-transition'
import Neo from './neo'
import Leo from './leo'
import Meo from './meo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default class Who extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to="/neo">Neo</Link></li>
                        <li><Link to="/leo">Leo</Link></li>
                        <li><Link to="/meo">Meo</Link></li>
                    </ul>
                    <Route path="/neo" component={Neo} />
                    <Route path="/meo" component={Meo} />
                    <Route path="/leo" component={Leo} />
                </div>
            </Router>
        )
    }
}
