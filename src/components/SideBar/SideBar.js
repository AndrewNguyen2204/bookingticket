import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';
export default function SideBar(props) {

    const { open, setClose } = props;

    return (
        <div className={open ? "sidebar-container active" : "sidebar-container"} onClick={() => { setClose(!open) }}>

            <div className="sidebar-content">
                <div className="close-btn" onClick={() => { setClose(!open) }}><FontAwesomeIcon icon={faTimes} /></div>
                <ul className="menu">
                    <li className="flex">
                        <NavLink to="/home" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white">Contact</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/news" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white">News</NavLink>
                    </li>

                </ul>
                <div className="items-center flex-shrink-0 flex flex-col">
                    <button className="self-center px-8 py-3 rounded"><NavLink to="/login" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white">Sign In</NavLink></button>
                    <button className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50"><NavLink to="/register" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white border-violet-600">Register</NavLink></button>
                </div>
            </div>
        </div>
    )
}
