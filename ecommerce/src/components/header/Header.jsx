import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className='header'>
        <Link to='/'style={{textDecoration:'none',color:'#fff'}}><div style={{ display: 'flex', alignItems: 'center' }}>
                <img src='./image/logo.png' style={{ height: '30px' }} alt='logo'/>
                <h1 style={{ margin: '0 0 0 10px' }}>ShopHaven</h1>
            </div></Link>
        
       <Link to='/logout'><button className='logout-btn'>logout</button></Link>
       
      
      </header>
    </>
  )
}

export default Header
