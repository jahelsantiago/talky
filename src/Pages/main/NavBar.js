import { IconButton } from '@material-ui/core'
import { GitHub } from '@material-ui/icons'
import React from 'react'
import logo from '../../Images/logo_no_text.jpg'
import "./NavBar.css"


const NavBar = ({setOpenModal}) => {
    return (
        <div className = "nav-bar">
            
            <IconButton>                
                <img src={logo} alt="" className = "image"/>                
            </IconButton>
            <IconButton>                
                <a rel = "noreferrer" href = "https://github.com/jahelsantiago/talky" target = "_blank">
                    <GitHub fontSize = "large" style = {{color : "white"}}/>
                </a>
            </IconButton>            
            
            <IconButton className = "about-button" style = {{color : "#f7ac5d", fontWeight : "600"}} onClick = {()=>{setOpenModal(true)}}>
                    ABOUT
            </IconButton>
            
            
        </div>
    )
}

export default NavBar
