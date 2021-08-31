import { LogLevel } from '@aspnet/signalr';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SideBar from '../../../../components/SideBar/SideBar';
import UserAvatar from '../../../../components/UserAvatar/UserAvatar';

export default function Header() {

    const [click, setClick] = useState(false);

    const { userLogin } = useSelector(state => state.UserReducer);
   

    return (
        <header className="glass w-full p-1 lg:p-4  text-coolGray-800  text-white fixed z-10">
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
                    {userLogin !== null ? <UserAvatar user={userLogin} /> : <>

                        <button className="self-center px-8 py-3 rounded"><NavLink to="/login" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent ">Sign In</NavLink></button>
                        <button className="self-center px-8 py-3 font-semibold rounded"><NavLink to="/register" className="flex items-center -mb-0.5 border-b-2 px-5 py-2 rounded-md border-transparent bg-purple-700 bg-opacity-70 hover:bg-opacity-100 duration-300">Sign Up</NavLink></button>
                    </>}
                </div>
                <button onClick={() => { setClick(!click) }} className="p-0 md:p-4 lg:hidden opacity-60 duration-300 hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-purple-700 font-bold">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <SideBar open={click} setClose={setClick} />
        </header>

    )
}
