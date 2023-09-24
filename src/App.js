import React from 'react'
import Product from './components/Product'
import CustomProductCard from './components/CustomProducts'

const Home = () => {
  return (
    <div>
      <div className="product-title">
        <h1 className='text-2xl font-semibold text-[#333]'>Featured Products</h1>
      </div>
      <Product />
      <div className="all-product mt-8">
        <div className="product-title">
          <h1 className='text-2xl font-semibold text-[#333]'>All Products</h1>
        </div>

        <div>
          <CustomProductCard />
        </div>
      </div>
    </div>
  )
}

export default Home