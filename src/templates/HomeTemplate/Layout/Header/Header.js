import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SideBar from '../../../../components/SideBar/SideBar';


export default function Header() {

    const [click, setClick] = useState(false);

    return (
        <header className="p-1 lg:p-4 bg-coolGray-100 text-coolGray-800 bg-black bg-opacity-25 text-white fixed z-10 w-full">
            <div className="container flex justify-between h-8 md:h-16 mx-auto">
                <NavLink to="/home" aria-label="Back to homepage" className="flex items-center p-2 w-16">
                    <img className="w-full" src="./Images/logo.png" alt="logo" />


                </NavLink>
                <ul className="items-stretch space-x-3 lg:flex hidden text-white">
                    <li className="flex">
                        <NavLink to="/home" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent">Contact</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/news" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent">News</NavLink>
                    </li>

                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex text-white">
                    <button className="self-center px-8 py-3 rounded"><NavLink to="/signin" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent ">Sign In</NavLink></button>
                    <button className="self-center px-8 py-3 font-semibold rounded"><NavLink to="/register" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent">Register</NavLink></button>
                </div>
                <button onClick={() => { setClick(!click) }} className="p-0 md:p-4 lg:hidden opacity-60 duration-300 hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <SideBar open={click} setClose={setClick} />
        </header>

    )
}
