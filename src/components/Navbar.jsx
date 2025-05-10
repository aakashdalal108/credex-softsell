import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-3  '>
        <div className='flex gap-1 items-center '>
        <img className='w-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmuDUkNws4v_HFdgotaYL4du5pNezop5cs3A&s" alt="" />
        <h1 className='text-2xl  font-bold'>SoftSell</h1>
        </div>
      <ul className='flex gap-5'>
        
        <li>Sign up</li>
        <li>Login</li>
      </ul>
    </div>
  )
}

export default Navbar
