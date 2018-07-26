import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Who from './components/Who'
import Skills from './components/Skills'
import {NavLink, Switch} from 'react-router-dom'
import './components/styles/app.css'
import NavBar from './components/navBar'

export default class App extends React.Component {
  render() {
    return(
        <NavBar/>
    )
  }
}
