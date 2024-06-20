import React from 'react'

function Home() {
    // 
  return (
    <div>
    <div  className='container'
    style={{
        height: '100vh',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./image/image2.png)',
       backgroundRepeat:'no-repeat',
       display:'flex',justifyContent:'flex-end',alignItems:'center',paddingRight:'20px',color:'white',textAlign:'right',fontSize:'60px',
    fontSize:'60px',fontWeight: 'bold',
      
    }}>
      
        <i>Unbeatable Prices <img src='./image/money.png' style={{height:'50px'}}/> Unmatched Quality</i>
      
    </div>
    </div>
  )
}

export default Home
