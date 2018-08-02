import React from 'react'
import ReactDOM from 'react-dom'
import './styles/neo.css'
import NeoWall from './styles/images/nEo.png'
export default class Neo extends React.Component {
    render(){
        const styles={'width': 100,}
        return(
            <div className='neo'>
                <img src={NeoWall} id='NeoWall' style={styles}></img>
            </div>
        )
    }
}
