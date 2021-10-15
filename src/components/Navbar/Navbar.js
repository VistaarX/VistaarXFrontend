import React from 'react'
import "../../stylesheets/navbar.css"
import { ImHome3} from "react-icons/im";
import { FaUserFriends } from "react-icons/fa";
import { FaPlusSquare} from "react-icons/fa";
import { FaBell} from "react-icons/fa";
import { FaCircle} from "react-icons/fa";
import { FaSearch} from "react-icons/fa";
import { Link } from 'react-router-dom'
import logo from "../../img/logo.svg"
import {Zoom, Fade} from 'react-reveal';
function Navbar() {
    const linkStyle = { textDecoration: 'none' }
    
    return (
        <div className="navbar">
            <nav>
                <div className="navbar__body navbar__logo">    
          
                <img src={logo} alt=""/>
             
                </div>
                <div className="navbar__body navbar__icons">
                    
                    <Zoom>
                    <Link to='/' style={linkStyle}><div className="icons"><ImHome3 size={22} />Home</div></Link>
                    <Link to='/network' style={linkStyle}><div className="icons"><FaUserFriends size={22} color="#3665dd"/>Network</div></Link>
                    <Link to='/add_post' style={linkStyle}><div className="icons"><FaPlusSquare size={22} color="#3665dd"/>Post</div></Link>
                    <div className="icons"><FaBell size={22} color="#3665dd"/>Notification</div>
                    <Link to="/user" style={linkStyle}><div className="icons"><FaCircle size={22} color="#3665dd"/>User</div></Link>
                    </Zoom>
                </div>
                <div className="navbar__body navbar__search">
                <Fade right>
                    <div className="navbar__searchBox"><FaSearch size={20}/><input type="search" placeholder='Search'/></div>
                </Fade>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
