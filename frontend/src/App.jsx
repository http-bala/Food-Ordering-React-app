import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOder/PlaceOrder'
import Footer from './components/Footer/Footer';
import LoginPop from './components/LoginPop/LoginPop';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  
  const [showLogin, setshowLogin] = useState(false)
  
  return (
    <>
    <ToastContainer> </ToastContainer>
    {showLogin?<LoginPop setshowLogin={setshowLogin}/>:<></>}
      <div className='app'>
        <Navbar setshowLogin={setshowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App