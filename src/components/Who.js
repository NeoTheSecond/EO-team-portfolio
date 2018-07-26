import React from 'react'
import ReactDOM from 'react-dom'
import './styles/who.css'
import PageTransition from 'react-router-page-transition'
import Neo from './neo'
import Leo from './leo'
import Meo from './meo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NeoAva from './styles/images/neo.jpg'
import MeoAva from './styles/images/meo.jpg'
import LeoAva from './styles/images/leo.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init()

export default class Who extends React.Component {
    render(){
        return(
                <Router>
                    <div className='container-fluid' id='who'>
                        <div className='row'>
                            <div data-aos='zoom-out'data-aos-duration="1000">
                                <Link to='neo'><img src={NeoAva} className='col-xs-4 col-sm-4 col-md-4 col-lg-4'></img></Link>
                            </div>
                            <div data-aos='zoom-out'data-aos-duration="2000">
                                <Link to='meo'><img src={MeoAva} className='col-xs-4 col-sm-4 col-md-4 col-lg-4'></img></Link>
                            </div>
                            <div data-aos='zoom-out'data-aos-duration="2500">
                                <Link to='leo'><img src={LeoAva} className='col-xs-4 col-sm-4 col-md-4 col-lg-4'></img></Link>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'><Route path="/neo" component={Neo} /></div>
                            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'><Route path="/meo" component={Meo} /></div>
                            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'><Route path="/leo" component={Leo} /></div>
                        </div>
                    </div>
                </Router>
        )
    }
}
