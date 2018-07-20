import React from 'react'
import ReactDOM from 'react-dom'
// import './styles/home.css'
import PageTransition from 'react-router-page-transition'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default class Home extends React.Component {
    render() {
        return(
            <h1 className='iWantThis'>this is the homepage</h1>
        )
    }
}
