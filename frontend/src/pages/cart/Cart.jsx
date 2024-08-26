import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

  const {cardItem,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);

const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quntity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
       {food_list.map((item,index)=>{
        if (cardItem[item._id]>0) {
          return(
            <div>
            <div className='cart-items-title cart-items-item'>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{cardItem[item._id]}</p>
              <p>{item.price*cardItem[item._id]}</p>
              <p className='cross' onClick={()=>removeFromCart(item._id)}>X</p>
            </div>
              <hr />
            </div>
          )
        }
       })}
      </div>
      <div className="cart-bottom">
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
              <p>${getTotalCartAmount()===0? 0: 40}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount()===0? 0:getTotalCartAmount()+40}</p>
            </div>

          </div>
          <button onClick={()=>navigate('/order')} >PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have promocode, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart