import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { LOG_OUT } from '../../../redux/types/UserType';
import { USER_LOGIN } from '../../../util/settings/config';
import { Redirect } from "react-router";
import {history} from '../../../App';

import './SideBar.css';




export default function SideBar(props) {


   
    const [trigger, setTrigger] = useState(false);

    const dispatch = useDispatch();

    if (!localStorage.getItem(USER_LOGIN)) {
        alert('You do not have permission to access');
        return <Redirect to='/home' />
    }

    const userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'));




    const isActive = trigger ? 'active' : '';

    const handleLogout = () => {
        dispatch({
            type: LOG_OUT
        });

        history.push('/home');
    }



    return (
        <div className={`${isActive} admin-sidebar glass`}>
            <button className="btn-show" onClick={() => setTrigger(!trigger)}>
                <ion-icon name="chevron-forward-circle-outline"></ion-icon>
                <ion-icon name="chevron-back-circle-outline"></ion-icon>
            </button>

            <div className="profile mb-10">
                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="profile-avatar" />
                <div className="profile-details hidden">
                    <h2 className="text-lg font-semibold">{userLogin.hoTen}</h2>
                    <span className="flex items-center space-x-1">
                        <NavLink to="/profile" className="text-xs hover:text-blue-300 text-white">View profile</NavLink>
                    </span>
                </div>
            </div>
            <div className="divide-y divide-coolGray-300">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li className="item">
                        <NavLink to="/dashboard" className="item-link" >
                            <ion-icon name="cube-outline"></ion-icon>
                            <span className="hidden">Dashboard</span>
                        </NavLink>
                    </li >
                    <li className="item">
                        <NavLink to="/dashboard/users" className="item-link">
                            <ion-icon name="people-outline"></ion-icon>
                            <span className="hidden">Users</span>
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink to="/dashboard/movies" className="item-link">
                            <ion-icon name="videocam-outline"></ion-icon>
                            <span className="hidden">Movies</span>
                        </NavLink>
                    </li>

                </ul>

            </div>
            <div className="divide-y divide-coolGray-300">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li className="item">
                        <NavLink to="/dashboard" className="item-link">
                            <ion-icon name="settings-outline"></ion-icon>
                            <span className="hidden">Setting</span>
                        </NavLink>
                    </li>
                    <li className="item">
                        <button type="button" className="item-link" onClick={handleLogout}>
                            <ion-icon name="log-out-outline"></ion-icon>
                            <span className="hidden">Logout</span>
                        </button>
                    </li>
                </ul>

            </div>
        </div>
    )
}
