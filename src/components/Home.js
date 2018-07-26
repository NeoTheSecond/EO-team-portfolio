import React from 'react'
import ReactDOM from 'react-dom'
import './styles/home.css'
import PageTransition from 'react-router-page-transition'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Background from './styles/images/Background.png'
import HomePage from './styles/images/homePage.png'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './styles/fonts/stylesheet.css'
// const background={
//     background-image: url("./images/logoBackground.png"),
//     /* Full height */
//     height: 100%,
//     /* Center and scales the image nicely */
//     background-position: center,
//     background-repeat: no-repeat,
//     background-size: cover,
// }

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
                    <div data-aos="zoom-out-down"  id='centered' className='container-fluid'>
                        {/* <div class='row'>
                            <div class='col-xl-4 col-lg-4'></div>
                            <div class='col-xl-4 col-lg-4'>
                                <h1>A MESSAGE FROM TEAM LEADER</h1>
                                <p>Hi, I’m Neo. Nice to meet you. Ever since i first learned Pascal in highschool, i've fallen in love with coding and tech in general. Together with my friends and bros Leo and Meo, we created E.O team. We are quiet but confident, foolish but curious and is always looking for ways to improve our skills.</p>
                            </div>
                            <div class='col-xl-4 col-lg-4'></div>
                        </div> */}
                    </div>
                    <div data-aos="zoom-out-down" class='Team' >
                            <img src={HomePage} id='Team'></img>
                            <div id='centered'>
                                THIS IS THE TEAM
                            </div>
                            <div id='meo'>
                                meo
                            </div>
                            <div id='neo'>
                                neo
                            </div>
                            <div id='leo'>
                                leo
                            </div>
                    </div>
                </div>

        )
    }
}
