import React, { useState,useRef,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LOG_OUT } from '../../redux/types/UserType';
import './UserAvatar.css';
import { useHistory } from "react-router";


export default function UserAvatar(props) {

    const { user } = props;

    const ref = useRef(null);

    const [hide, setHide] = useState(true);


    useEffect(() => {
       
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                handleHide();
            }
        }

       
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    const dispatch = useDispatch();

    const history = useHistory();

    const isHide = hide ? 'hide' : '';

    const isAdmin = user?.maLoaiNguoiDung === 'QuanTri' ? 'flex items-center p-2 space-x-3 rounded-md' : 'hidden';

    
    const handleHide = () => setHide(true);
    
    const handleClick = () => {
        setHide(!hide);
    }
   
    const handleLogout = async() => {
        await dispatch({
            type: LOG_OUT
        });
        history.push('/home');
    }

    return (
        <div ref={ref} className="user-login">
            <span className="user-login-name">Hello ! {user?.taiKhoan}</span>
            <div className="img-box  rounded-full overflow-hidden cursor-pointer border-white border-2 border-opacity-50" onClick={handleClick}>

                <img className="avatar" src={`https://i.pravatar.cc/40?u=${user?.taiKhoan}`} alt="avatar" />

            </div>
            <div className={`user-dropdown glass ${isHide}`}>

                <div className="flex items-center p-2 space-x-4">
                    <div className="img-box  rounded-full overflow-hidden cursor-pointer border-white border-2 border-opacity-50 flex-shrink-0">
                        <img className="avatar" src={`https://i.pravatar.cc/40?u=${user?.taiKhoan}`} alt="avatar" />
                    </div>
                    <div className="flex-shrink-1  flex-grow-1">
                        <h5 className="text-sm capitalize font-semibold">{user?.hoTen}</h5>
                        <span className="flex items-center space-x-1">
                            <NavLink to="/profile" className="text-xs hover:text-blue-300 text-white">View profile</NavLink>
                        </span>
                    </div>

                </div>

                <div className="w-full flex flex-col items-center">

                    <NavLink to="/dashboard" className={isAdmin}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-white">
                            <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z" />
                            <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z" />
                        </svg>
                        <span>Setting</span>
                    </NavLink>

                    <button type="button" className="flex items-center p-2 space-x-3 rounded-md" onClick={handleLogout}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-white">
                            <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z" />
                            <rect width={32} height={64} x={256} y={232} />
                        </svg>
                        <span>Logout</span>
                    </button>
                </div>
            </div>

        </div>
    )
}
