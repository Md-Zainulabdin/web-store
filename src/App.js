import React from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'

const Home = () => {
  return (
    <div>
      <div className="product-title">
        <h1 className='text-2xl font-semibold text-[#333]'>Featured Products</h1>
      </div>
      <Product/>
    </div>
  )
}

export default Home