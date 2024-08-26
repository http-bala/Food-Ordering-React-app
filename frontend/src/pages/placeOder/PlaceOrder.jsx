import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className='place-order'>
       <div className="place-order-left">
          <p className='title'>Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='first name' />
            <input type="text" placeholder='lastname' />
          </div>
          <input type="email" placeholder='Email Address' />
          <input type="text" placeholder='Street' />
          <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zipcode' />
            <input type="text" placeholder='country' />
          </div>
          <input type="text" placeholder='phone' />
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>delivery</p>
              <p>{40}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalCartAmount()+40}</p>
            </div>

          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>
          
          </div> 
    </form>
  )
}

export default PlaceOrder