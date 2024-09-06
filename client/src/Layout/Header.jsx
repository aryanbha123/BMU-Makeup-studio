import React, { useState } from 'react'
import { Hamburger } from '../Utility/Hamburger'
import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
export default function Header() {

    const [fixed , setFixed] = useState(false);
    const toggleNav = () => {
        setFixed((prev) => !prev)
    }
    return (
        <>
            <nav className='flex lg:px-12 px-5 items-start py-5 justify-between' >
                <div className='font-extrabold font-[futura now headline]' >
                    <span style={{ fontSize: "29px", lineHeight: "1rem", textTransform: "uppercase" }} >BMU <br /> Make Up <br /> Studio</span>
                </div>
                <div className='flex gap-16 font-[Helvetica Now Text]' >
                    <a className='lg:block hidden font-medium font-[Raleway] text-sm mt-3' href="">Home</a>
                    <a className='lg:block hidden font-medium font-[Raleway] text-sm mt-3' href="">About</a>
                    <a className='lg:block hidden font-medium font-[Raleway] text-sm mt-3' href="">Services</a>
                    <a className='lg:block hidden font-medium font-[Raleway] text-sm mt-3' href="">Contact</a>
                    <div className='cursor-pointer mt-3  relative right-4 z-50 flex flex-col gap-1 justify-center' onClick={toggleNav}>
                        <div className={`${fixed ? 'rotate-[43deg]  absolute ' : ''} transition-all duration-500 w-7 h-[2px] bg-black`}></div>
                        <div className={`${fixed ? '-rotate-[46deg] absolute ' : ''} transition-all duration-500 w-7 h-[2px] bg-black`}></div>
                    </div>
                </div>

                <div className={`${!fixed ?  'translate-x-full': 'translate-x-0'} transition-all duration-200 fixed top-0 left-0 w-full h-[100vh] bg-[#f7f7f7] z-40`} >
                    <div className="lg:flex">
                    </div>

                    <div className="lg:hidden"></div>
                </div>
            </nav >
        </>
    )
}
