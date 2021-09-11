import React from 'react';
import Breadcrumb from '../../../components/Breadcrumd/Breadcrumb';



export default function Dashboard(props) {


    const { location: { pathname } } = props;


    return (
        <div className="w-full min-height-screen flex flex-col">

            <Breadcrumb pathname={pathname} />

            <div className="w-[90%] mx-auto my-10 p-10 glass rounded-[30px] grid grid-cols-2 grid-rows-2 gap-10">
                <div className="w-full">
                    <div className="flex flex-col mx-auto items-center p-8 rounded-md w-60 sm:px-12 bg-coolGray-50 text-coolGray-800">
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
                <div className="w-full flex flex-wrap mb-10">
                    <div className="min-w-max mx-2">
                        <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                            <div className="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
                                <ion-icon name="person-add-outline"></ion-icon>

                            </div>
                            <div className="mx-5">
                                <h4 className="text-2xl font-semibold text-gray-700">8,282</h4>
                                <div className="text-gray-500">New Users</div>
                            </div>
                        </div>
                    </div>


                    <div className="min-w-max mx-2">
                        <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                            <div className="p-3 bg-blue-600 bg-opacity-75 rounded-full">

                                <ion-icon name="cart-outline"></ion-icon>
                            </div>
                            <div className="mx-5">
                                <h4 className="text-2xl font-semibold text-gray-700">200,521</h4>
                                <div className="text-gray-500">Total Orders</div>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-max mx-2">
                        <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                            <div className="p-3 bg-pink-600 bg-opacity-75 rounded-full">
                                <ion-icon name="videocam-outline"></ion-icon>
                            </div>
                            <div className="mx-5 ">
                                <h4 className="text-2xl font-semibold text-gray-700">215,542</h4>
                                <div className="text-gray-500">Available Products</div>
                            </div>
                        </div>
                    </div>
                </div>           
                   

               

            </div>
        </div>
    )
}
