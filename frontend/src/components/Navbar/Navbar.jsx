import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import search_icon from '../../assets/search_icon.png'
import basket_icon from '../../assets/basket_icon.png'
import { Link } from 'react-router-dom'

const Navbar = ({setshowLogin}) => {
    const [menu, setMenu] = useState("home")
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className='logo' />
            <ul className='navbar-menu'>
                <Link onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>contact</a>
            </ul>
            <div className="navbar-right">
                <img src={search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button onClick={()=>setshowLogin(true)}>sign in</button>
            </div>
        </div>
    )
}

export default Navbar