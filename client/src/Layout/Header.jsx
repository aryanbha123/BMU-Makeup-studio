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
            <nav className='flex relative  lg:pl-12 pl-5 items-start py-5 justify-between' >
                <div className='font-extrabold relative h-[68px] w-full font-[futura now headline]' >
                    <span className={`${fixed ? 'fixed z-50 ' : 'absolute z-50'}`} style={{ fontSize: "29px", lineHeight: "1.6rem", textTransform: "uppercase" }} >BMU <br /> Make Up <br /> Studio</span>
                </div>
                <div className='flex gap-16  font-[Helvetica Now Text]' >
                    <Link to={"/"}  className='cursor-pointer lg:block hidden font-medium font-[Raleway] text-sm mt-3'>Home</Link>
                    <Link to={"/about"}  className='cursor-pointer lg:flex hidden font-medium font-[Raleway] text-sm mt-3'>About</Link>
                    <Link to={"/service"}  className='cursor-pointer lg:flex hidden font-medium font-[Raleway] text-sm mt-3'>Services</Link>
                    <Link to={"/contact"}  className='cursor-pointer lg:flex hidden font-medium font-[Raleway] text-sm mt-3'>Contact</Link>
                    <div className={`${fixed ? 'mr-7' : ''} cursor-pointer mt-3 lg:h-[50px] lg:mr-0  lg:w-[50px] relative right-4 z-50 flex flex-col gap-1 pt-1`} onClick={toggleNav}>
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

                            <div className='gap-5 flex absolute bottom-28 ' >
                                <button className="rounded-md bg-black -600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-lg hover:bg-black -500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black -600" >Book Appointment</button>
                                <button className="rounded-md bg-black -600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-black -500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black -600">Join Achademy</button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:hidden flex flex-col justify-between">
                        <div className='flex text-2xl mt-[140px] items-center px-10 w-full  flex-col ' >
                            <Link className='w-full text-center px-5 my-1 py-1 rounded-[20px] bg-[#e1e1ed]' >Home</Link>
                            <Link className='w-full text-center px-5 my-1 py-1 rounded-[20px]' >About</Link>
                            <Link className='w-full text-center px-5 my-1 py-1 rounded-[20px]' >Contact</Link>
                            <Link className='w-full text-center px-5 my-1 py-1 rounded-[20px]' >Services</Link>
                        </div>
                        <div className='fixed bottom-20 flex justify-center w-full gap-5' >
                            <a className='bg-black px-6 flex justify-center items-center py-2 rounded-[20px] text-white' href="">Join Achademy</a>
                            <a className='bg-black px-6 flex justify-center items-center py-2 rounded-[20px] text-white' href="">Book Appointment</a>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}
