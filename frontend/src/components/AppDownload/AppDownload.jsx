import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br />Tomato App</p>
        <div className="app-dwonload-platform">
            <img src={assets.app_store} alt="" />
            <img src={assets.play_store} alt="" />
        </div>

    </div>
  )
}

export default AppDownload