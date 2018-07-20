import React from 'react'
import ReactDOM from 'react-dom'
import PageTransition from 'react-router-page-transition'
import './styles/skills.css'

export default class Skills extends React.Component{
    render(){
        return(
            <PageTransition>
                <div class='transition-item'>
                    <div class='transition-wrapper'>
                        <h1>yo</h1>
                    </div>
                </div>
            </PageTransition>
        )
    }
}
