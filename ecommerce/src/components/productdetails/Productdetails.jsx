import React, { useEffect, useState } from 'react'
import './Productdetails.css'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getProductId } from '../../Apiservice/Api'



function Productdetails() {
    const [first, setfirst] = useState({})
   
    const navigate=useNavigate()
    const { id } = useParams()
    useEffect(() => {
        const fetchproductid = async () => {
            const data = await getProductId(id)
            setfirst(data)
            console.log('jjj', first);
        }

        fetchproductid()

    }, [id])

    const handleAddToCart = (id) => {
         navigate(`/cart/${id}`)
         console.log('jjj', first.id);
        
        // Here you would typically update the state of your cart or make an API call to add the item to the cart.
        // console.log(`Product ${first.title} added to cart`);
        // alert(`${first.id} has been added to your cart!`);
    };


    // const handlebyNow=()=>{
    //     window.confirm('the product is out of stock')
    // }

    return (
        <div className='productdetails-containar'>

            <img src={first?.image} alt='image' className='proimage' />
            <div className='product-info'>
                <h2 className='product-title'>{first?.title}</h2>
                <p className='product-des'>{first?.description}</p>
                <p className='product-price'>{first?.price}</p>
                <button className='buy-btn' onClick={()=>{handleAddToCart(first.id)}}>Buy Now</button>
                <Link to='/'>
                    <button className='home-btn'>GoBackHome</button>
                </Link>

            </div>

        </div>
    )
}

export default Productdetails
