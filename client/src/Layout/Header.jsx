import React from 'react'
import { Hamburger } from '../Utility/Hamburger'
import { Link } from 'react-router-dom'
export default function Header() {
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
                    <div className='cursor-pointer mt-3 flex flex-col gap-1 justify-center'>
                        <div className="w-7 h-[2px] bg-black"></div>
                        <div className="w-7 h-[2px] bg-black"></div>
                    </div>
                </div>
            </nav >
        </>
    )
}
