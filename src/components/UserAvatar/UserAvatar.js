import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LOG_OUT } from '../../redux/types/UserType';
import './UserAvatar.css';



export default function UserAvatar(props) {

    const { user } = props;
    

    const [hide, setHide] = useState(true);

    const dispatch = useDispatch();

    const isHide = hide ? 'hidden' : 'flex flex-col';

    const handleClick = () => {
        setHide(!hide);
    }

    // window.addEventListener('mousedown', () => { setHide(true) });

    const handleLogout = () => {
        dispatch({
            type: LOG_OUT
        })
    }

    return (
        <div className="user-login relative flex items-center justify-center">
            <div className="img-box  rounded-full overflow-hidden cursor-pointer border-white border-2 border-opacity-50" onClick={handleClick}>
                <img className="avatar" src={`https://i.pravatar.cc/40?u=${user.taiKhoan}`} alt="avatar" />

            </div>
            <div className={`user-dropdown ${isHide}`}>
                <h5 className="userName">{user.hoTen}</h5>
                <NavLink to="/dashboard/profile">Profile</NavLink>
                <NavLink to="/dashboard">Manage</NavLink>
                <span className="cursor-pointer" onClick={handleLogout}>Log Out</span>
            </div>

        </div>
    )
}
