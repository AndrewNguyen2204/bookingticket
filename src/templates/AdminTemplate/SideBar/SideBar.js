import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { LOG_OUT } from '../../../redux/types/UserType';
import { USER_LOGIN } from '../../../util/settings/config';
import { Redirect, useRouteMatch } from "react-router";
import { history } from '../../../App';
import { MENU_ITEMS } from './MENU_ITEMS';
import './SideBar.css';




export default function SideBar(props) {



   

    const dispatch = useDispatch();

    if (!localStorage.getItem(USER_LOGIN)) {
        alert('You do not have permission to access');
        return <Redirect to='/home' />
    }



    const renderItems = () => {
        return MENU_ITEMS.map((item, index) => {
            return <MenuItem key={index} item={item}/>
            
        })
    }



    const handleLogout = () => {
        dispatch({
            type: LOG_OUT
        });

        history.push('/home');
    }



    return (
        <div className="admin-sidebar glass">

            <div className="sidebar-top">
                <div className="sidebar-logo my-10">
                    AMD

                </div>

                <ul className="sidebar-menu">

                    {renderItems()}

                </ul>

            </div>
            <div className="sidebar-bottom">

                <ul className="sidebar-menu">
                    <li className="menu-item">
                        <NavLink to="/dashboard" className="item-link">
                            <span className="link-icon">
                                <ion-icon name="settings-outline"></ion-icon>
                            </span>
                            <span className="link-title">Setting</span>


                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <button type="button" className="item-link" onClick={handleLogout}>
                            <span className="link-icon">
                                <ion-icon name="log-out-outline"></ion-icon>
                            </span>
                            <span className="link-title">Logout</span>


                        </button>
                    </li>
                </ul>

            </div>
        </div>
    )
}


function MenuItem({ item }) {

    let {title, link, icon } = item;

    let match = useRouteMatch({
        path: link
    })

    let checkActive = match?.isExact ? 'active' : '';

    return (
        <li className={`menu-item ${checkActive}`}>
            <NavLink to={link} className="item-link " >
                <span className="link-icon">
                    <ion-icon name={icon}></ion-icon>
                </span>
                <span className="link-title">{title}</span>
            </NavLink>
        </li >
    )

}