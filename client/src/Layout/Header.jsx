import React, { useState } from 'react'
import { Hamburger } from '../Utility/Hamburger'
import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import img from './image.png'
export default function Header() {

    const [fixed, setFixed] = useState(false);
    const toggleNav = () => {
        setFixed((prev) => !prev)
    }
    return (
        <>
            <nav className='flex lg:pl-12 pl-5 items-start py-5 justify-between' >
                <div className='font-extrabold font-[futura now headline]' >
                    <span style={{ fontSize: "29px", lineHeight: "1rem", textTransform: "uppercase" }} >BMU <br /> Make Up <br /> Studio</span>
                </div>
                <div className='flex gap-16  font-[Helvetica Now Text]' >
                    <Link to={"/"}  className='cursor-pointer lg:block hidden font-medium font-[Raleway] text-sm mt-3'>Home</Link>
                    <Link to={"/about"}  className='cursor-pointer lg:flex hidden font-medium font-[Raleway] text-sm mt-3'>About</Link>
                    <Link to={"/service"}  className='cursor-pointer lg:flex hidden font-medium font-[Raleway] text-sm mt-3'>Services</Link>
                    <Link to={"/contact"}  className='cursor-pointer lg:flex hidden font-medium font-[Raleway] text-sm mt-3'>Contact</Link>
                    <div className={`${!fixed ? 'mr-10' : ''}cursor-pointer mt-3 lg:h-[50px] lg:mr-0  lg:w-[50px] relative right-4 z-50 flex flex-col gap-1 pt-1`} onClick={toggleNav}>
                        <div className={`${fixed ? 'rotate-[43deg]  fixed ' : ''} transition-all duration-500 w-7 h-[2px] bg-black`}></div>
                        <div className={`${fixed ? '-rotate-[46deg] fixed ' : ''} transition-all duration-500 w-7 h-[2px] bg-black`}></div>
                    </div>
                </div>

                <div className={`${!fixed ? 'translate-x-full' : 'translate-x-0'} transition-all duration-200 fixed top-0 left-0 w-full h-[100vh] bg-[#f7f7f7] z-40`} >
                    <div className="lg:flex hidden  justify-between px-12">
                        <div className='lg:flex items-center h-[100vh]' >
                            <img src={img} alt="" />
                        </div>
                        <div className="flex-1 relative flex flex-col items-end mt-20 gap-2  text-6xl">
                            <Link className='hover:text-red-300 transition-all duration-150' >Home</Link>
                            <Link className='hover:text-red-300 transition-all duration-150' >About</Link>
                            <Link className='hover:text-red-300 transition-all duration-150' >Services</Link>
                            <Link className='hover:text-red-300 transition-all duration-150' >Contact</Link>
                            <Link className='hover:text-red-300 transition-all duration-150' >Visit Us</Link>

                            <div className='gap-5 flex absolute bottom-28' >
                                <button className="rounded-md bg-black -600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-lg hover:bg-black -500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black -600" >Book Appointment</button>
                                <button className="rounded-md bg-black -600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-black -500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black -600">Join Achademy</button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:hidden flex">
                        <div className='flex text-2xl font-medium flex-col ' >
                            <Link>Home</Link>
                            <Link>About</Link>
                            <Link>Contact</Link>
                            <Link>Services</Link>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}
