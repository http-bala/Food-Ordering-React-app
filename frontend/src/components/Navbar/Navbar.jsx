import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import search_icon from '../../assets/search_icon.png'
import basket_icon from '../../assets/basket_icon.png'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { toast } from 'react-toastify'

const Navbar = ({setshowLogin}) => {
    const [menu, setMenu] = useState("home")
    const navigate = useNavigate();
    const Logout = ()=>{
        localStorage.removeItem("token")
        setToken("");
        navigate('/')
        toast.success("Logout User Successfull")
    }

    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

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
                  <Link to='/cart'><img src={basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                {!token? <button onClick={()=>setshowLogin(true)}>sign in</button> : <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt="" />
                        <ul className='nav-profile-dropdown'>
                            <li><img src={assets.bag_icon} alt="" />Order</li>
                            <hr />
                            <li onClick={Logout}><img src={assets.logout_icon} alt="" />Logout</li>
                            <hr />
                        </ul>
                    </div>}
               
            </div>
        </div>
    )
}

export default Navbar