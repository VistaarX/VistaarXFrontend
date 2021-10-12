import React from 'react'
import "../../stylesheets/navbar.css"
import { ImHome3} from "react-icons/im";
import { FaUserFriends } from "react-icons/fa";
import { FaPlusSquare} from "react-icons/fa";
import { FaBell} from "react-icons/fa";
import { FaCircle} from "react-icons/fa";
import { FaSearch} from "react-icons/fa";
import { Link } from 'react-router-dom'

function Navbar() {
    const linkStyle = { textDecoration: 'none' }
    
    return (
        <div className="container">
            <nav>
                <div className="nav_body nav_logo">    
                </div>
                <div className="nav_body nav_icons">
                    <Link to='/' style={linkStyle}><div className="icons"><ImHome3 size={22} />Home</div></Link>
                    <Link to='/network' style={linkStyle}><div className="icons"><FaUserFriends size={22} color="#3665dd"/>Network</div></Link>
                    <div className="icons"><FaPlusSquare size={22} color="#3665dd"/>Post</div>
                    <div className="icons"><FaBell size={22} color="#3665dd"/>Notification</div>
                    <div className="icons"><FaCircle size={22} color="#3665dd"/>User</div>
                </div>
                <div className="nav_body nav_search">
                    <div className="searchBox"><FaSearch size={20}/><input type="search" placeholder='Search'/></div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
