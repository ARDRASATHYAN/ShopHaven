import React, { useEffect, useState } from 'react'
import './Homes.css'
import { getAllproduct } from './../../Apiservice/Api';
import { Link } from 'react-router-dom';
import Home from './Home';


function Homes() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    const fechdata = async () => {
      const data = await getAllproduct();
      setProduct(data)
      console.log('allproducts', product);
    }
    fechdata()
  }, [])

  return (
    <>
    <Home/>
    <div className='product-grid'>
      {product.map((product, key) => (
        <div className='product' key={product.id}>
          {/* <h1>{key+1}</h1> */}
          <img src={product.image} alt='alternative' />
          <h2 className='sample'>{product.title}</h2>
          <p>
            <span className='price'>{product.price}</span>
          </p>
          <Link to={`/prodetails/${product.id}`}>
            <button>product details</button>
          </Link>

        </div>
      ))}
    </div>
    </>
  )
}

export default Homes
