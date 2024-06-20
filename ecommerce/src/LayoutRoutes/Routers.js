import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from '../components/footer/Footer';
import Homes from '../components/homes/Homes';
import Header from '../components/header/Header';
import Logout from '../components/logout/Logout';
import Productdetails from '../components/productdetails/Productdetails';
import Cart from '../components/cart/Cart';

function Routers() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homes />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/prodetails/:id' element={<Productdetails />} />
          <Route path='/prodetails/:id' element={<Productdetails />} />
          <Route path='/cart/:id' element={<Cart />} />
         
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Routers
