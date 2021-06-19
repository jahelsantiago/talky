import { IconButton } from '@material-ui/core'
import { GitHub } from '@material-ui/icons'
import React from 'react'
import logo from '../../Images/logo_no_text.jpg'
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className = "nav-bar">
            <img src={logo} alt="" className = "image"/>
            <a rel = "noreferrer" href = "https://github.com/jahelsantiago/talky" target = "_blank">
            <IconButton>                
                <GitHub fontSize = "large" style = {{color : "white"}}/>
            </IconButton>            
            </a>
            <IconButton className = "about-button" style = {{color : "#f7ac5d", fontWeight : "600"}}>
                ABOUT
            </IconButton>
            
        </div>
    )
}

export default NavBar
