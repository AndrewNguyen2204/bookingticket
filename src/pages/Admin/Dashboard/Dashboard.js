import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div className="w-full min-height-screen flex flex-col">
            <nav aria-label="breadcrumb" className=" breadcrumb h-1/8 w-[90%] p-4 glass rounded-full text-white mx-auto mt-10">
                <ol className="flex h-8 space-x-2">
                    <li className="flex items-center">
                        <NavLink to="/home" title="Back to homepage" className="hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 pr-1 text-white">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </NavLink>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" className="w-2.5 h-2.5 mt-0.5 transform rotate-90 fill-current text-white">
                            <path d="M32 30.031h-32l16-28.061z" />
                        </svg>
                        <a href="#" className="flex items-center px-1 capitalize hover:underline">Parent</a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" className="w-2.5 h-2.5 mt-0.5 transform rotate-90 fill-current text-white">
                            <path d="M32 30.031h-32l16-28.061z" />
                        </svg>
                        <a href="#" className="flex items-center px-1 capitalize hover:underline">Parent</a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" className="w-2.5 h-2.5 mt-0.5 transform rotate-90 fill-current text-white">
                            <path d="M32 30.031h-32l16-28.061z" />
                        </svg>
                        <a href="#" className="flex items-center px-1 capitalize hover:underline hover:no-underline cursor-default">Current</a>
                    </li>{/**/}
                </ol>
            </nav>
            <div className="w-full h-full flex items-center justify-center">
                <div className="glass w-2/3 h-2/3">
                    <div className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 bg-coolGray-50 text-coolGray-800">
                        <div className="text-center">
                            <h2 className="text-xl font-semibold">Dubai</h2>
                            <p className="text-sm text-coolGray-600">July 29</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-32 h-32 p-6 text-yellow-400 fill-current">
                            <path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z" />
                            <rect width={32} height={48} x={240} y={16} />
                            <rect width={32} height={48} x={240} y={448} />
                            <rect width={48} height={32} x={448} y={240} />
                            <rect width={48} height={32} x={16} y={240} />
                            <rect width={32} height="45.255" x={400} y="393.373" transform="rotate(-45 416 416)" />
                            <rect width="32.001" height="45.255" x={80} y="73.373" transform="rotate(-45 96 96)" />
                            <rect width="45.255" height={32} x="73.373" y={400} transform="rotate(-45.001 96.002 416.003)" />
                            <rect width="45.255" height="32.001" x="393.373" y={80} transform="rotate(-45 416 96)" />
                        </svg>
                        <div className="mb-2 text-3xl font-semibold"> 32°
                            <span className="mx-1 font-normal">/</span>20°
                        </div>
                        <p className="text-coolGray-600">Partly cloudy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
