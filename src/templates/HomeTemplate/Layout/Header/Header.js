import { LogLevel } from '@aspnet/signalr';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useRouteMatch } from 'react-router-dom';
import SideBar from '../../../../components/SideBar/SideBar';
import UserAvatar from '../../../../components/UserAvatar/UserAvatar';
import { MenuItems } from './MenuItems';
import './Header.css';
import { Button } from '../../../../components/Button/Button';


export default function Header() {

    const [click, setClick] = useState(false);

    const { userLogin } = useSelector(state => state.UserReducer);

    const renderMenuItems = () => {

        return MenuItems.map((item, index) => {
            return (
                <NavbarItem key={index} item={item} />
            )
        })
    }

    return (
        <header className="w-full p-1 lg:p-4  text-coolGray-800  text-white fixed z-10">
            <div className="flex justify-between bg-black bg-opacity-25 border border-white border-opacity-50 items-center h-8 md:h-16 mx-auto rounded-full py-2 px-10">
                <NavLink to="/home" aria-label="Back to homepage" className="logo">
                    <img className="w-full" src="./Images/logo.png" alt="logo" />


                </NavLink>
                <ul className="navbar">

                    {renderMenuItems()}
                    
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex text-white">
                    {userLogin !== null ? <UserAvatar user={userLogin} /> : <>
                        <Button type="button" style="btn--transparent">
                            <NavLink to="/login">Sign In</NavLink>
                        </Button>
                        <Button type="button" style="btn--outline">
                            <NavLink to="/register">Sign Up</NavLink>
                        </Button>

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

function NavbarItem({ item }) {



    let match = useRouteMatch({       
        path: item.url
    })
    

    const checkActive = match ? 'active' : '';

    return (

        <li className={`relative flex items-center justify-center h-full ${checkActive}`}>
            <NavLink to={item.url}>{item.title}</NavLink>

        </li>


    )

}