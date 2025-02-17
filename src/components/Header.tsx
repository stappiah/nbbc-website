import React from 'react'
import Logo from './Logo'

export default function Header() {
  return (
    <div className=''>
        <div className='grid grid-cols-3 bg-white'>
        <div className='col-span-1'>
            <Logo />
        </div>
        <div className='col-span-2'>
        <div className='flex justify-center gap-10'>
            <p className=''>HOME</p>
            <p className=''>ABOUT</p>
            <p className=''>MINISTRIES</p>
        </div>
        </div>
        </div>
    </div>
  )
}
