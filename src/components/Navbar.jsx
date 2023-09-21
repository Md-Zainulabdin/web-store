import React from 'react'
import {FiShoppingBag} from "react-icons/fi"
import {MdPersonOutline} from "react-icons/md"

const Navbar = () => {
  return (
   <nav className='w-full h-[60px] border-b px-[20px] md:px-[50px] flex items-center justify-between'>
    <div className="logo">
        <h1 className='text-2xl font-semibold text-[--text-color]'>Web Store</h1>
    </div>
    <div className="menu flex items-center gap-6">
      <FiShoppingBag size={20} className='text-[#555] hover:text-[#777] cursor-pointer'/>
      <MdPersonOutline size={24} className='text-[#555] hover:text-[#777] cursor-pointer'/>
    </div>
   </nav>
  )
}

export default Navbar