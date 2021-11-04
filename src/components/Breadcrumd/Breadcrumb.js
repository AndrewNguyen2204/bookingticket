import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserAvatar from '../UserAvatar/UserAvatar';

export default function Breadcrumb({ pathname }) {

    const { userLogin } = useSelector(state => state.UserReducer);

    const pathnames = pathname.split('/').filter(x => x);


    return (
        <nav aria-label="breadcrumb" className=" breadcrumb relative h-[70px] w-[90%] flex items-center justify-between p-4   text-white mx-auto">
            <div className="glass absolute top-0 left-0 w-full h-full rounded-full z-0"></div>
            <ol className="flex h-8 space-x-2 z-10">
                <li className="flex items-center">
                    <NavLink to="/home" title="Back to homepage" className="hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 pr-1 text-white">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </NavLink>
                </li>

                {pathnames.map((name, index) => {

                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;

                    const isLast = index === pathnames.length - 1;

                    return isLast ? (
                        <li key={index} className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" className="w-2.5 h-2.5 mt-0.5 transform rotate-90 fill-current text-white">
                                <path d="M32 30.031h-32l16-28.061z" />
                            </svg>
                            <span className="flex items-center px-1 capitalize text-gray-400 cursor-default">{name}</span>
                        </li>
                    ) : (
                        <li key={index} className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" className="w-2.5 h-2.5 mt-0.5 transform rotate-90 fill-current text-white">
                                <path d="M32 30.031h-32l16-28.061z" />
                            </svg>
                            <NavLink to={routeTo} className="flex items-center px-1 capitalize">{name}</NavLink>
                        </li>
                    )

                })}
               
            </ol>
            <UserAvatar user={userLogin} />
        </nav>
    )
}
