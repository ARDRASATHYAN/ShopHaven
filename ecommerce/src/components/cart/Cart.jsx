import React, { useEffect, useState } from 'react'
import './cartstyle.css'

import { useNavigate, useParams } from 'react-router-dom';
import { getProductId } from '../../Apiservice/Api';



function Cart() {
  const [ cart,setCart ] = useState([])
  const navigate=useNavigate()


  console.log('set',cart);
  const {id}=useParams()
  useEffect(() => {
    const fetchproductid = async () => {
        const data = await getProductId(id)
        setCart(data)
        console.log('cart', data);
    }

    fetchproductid()

}, [])

const removeorder=( )=>{
  setCart('');
}
const confirmOrder = () => {
  // Implement order confirmation logic here
  // const confirmedItem = cart.find(item => item.id == itemId);
  window.confirm('the order confirmed get it in few days')
  navigate('/')
  // console.log('Order confirmed:', confirmedItem);
};

// 

  return (
    <>
      <div className="cart-container">
        <h1>ORDER CONFIRM</h1>
        <hr/>
        <ul className="cart-items">
        
            <li >
              <span>
                <img src={cart.image} alt={cart.name} style={{ width: '100px', height: '100px' }} />
                </span>
              <span> {cart.title}
                </span>
              <span>${cart.price}</span>
              <button onClick={() => removeorder(cart.id)}>Delete</button>
              <button onClick={() => confirmOrder(cart.id)}>Confirm</button>
            </li>
            <hr/>
         
       
          
        </ul>
       
       
      </div>
    </>
  )
}

export default Cart
