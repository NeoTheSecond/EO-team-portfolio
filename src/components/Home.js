import React from 'react'
import ReactDOM from 'react-dom'
import './styles/home.css'
import PageTransition from 'react-router-page-transition'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import Background from './styles/images/Background.png'
import Background from './styles/images/homepage3.png'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './styles/fonts/stylesheet.css'


// You can also pass an optional settings object
// below listed default settings
AOS.init({
    anchorPlacement: 'bottom'
})

export default class Home extends React.Component {
    render() {
        return(
                <div>
                    <div data-aos='fade-in' data-aos-duration='2000'>
                        <img src={Background} id='Background' ></img>
                    </div>
                    <div data-aos="zoom-out-down" className='container-fluid'>
                        <div class='row'>
                            <div id='message'>
                                <h1>A MESSAGE FROM TEAM LEADER</h1>
                                <hr/>
                                <p>Hi, I’m <span>Neo</span>. Nice to meet you. Ever since i first learned C in highschool, i've fallen in love with coding and tech in general. Together with my friends and bros <span>Leo</span> and <span>Meo</span>, we created <span>E.O team</span>.<br/> We are quiet but confident, foolish but curious and is always looking for ways to improve our skills.</p>
                            </div>
                            {/* <div data-aos="zoom-out-down" class='Team' >
                                <div className='col-xl-6 col-lg-6'>
                                    <img src={HomePage} id='Team'></img>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
        )
    }
}
