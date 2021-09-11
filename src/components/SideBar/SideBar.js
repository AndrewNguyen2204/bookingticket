import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button/Button';
import './SideBar.css';
export default function SideBar(props) {

    const { open, setClose, userLogin } = props;

    return (
        <div className={open ? "sidebar-container glass active" : "sidebar-container"} onClick={() => { setClose(!open) }}>

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
                    {userLogin !== null ? <>
                        <div className="flex items-center p-2 space-x-4">
                            <div className="img-box  rounded-full overflow-hidden cursor-pointer border-white border-2 border-opacity-50 flex-shrink-1 flex-grow-1">
                                <img className="avatar" src={`https://i.pravatar.cc/40?u=${userLogin.taiKhoan}`} alt="avatar" />
                            </div>
                            <div className="flex-shrink-1  flex-grow-1">
                                <h5 className="text-sm text-white capitalize font-semibold">{userLogin.hoTen}</h5>
                                <span className="flex items-center space-x-1">
                                    <NavLink to="/dashboard/profile" className="text-xs hover:text-blue-300 text-white">View profile</NavLink>
                                </span>
                            </div>

                        </div>
                    </>
                        : <>
                            <Button type="button" buttonStyle="btn--transparent">
                                <NavLink to="/login">Sign In</NavLink>
                            </Button>
                            <Button type="button" buttonStyle="btn--outline">
                                <NavLink to="/register">Sign Up</NavLink>
                            </Button>

                        </>}
                </div>
            </div>
        </div>
    )
}
