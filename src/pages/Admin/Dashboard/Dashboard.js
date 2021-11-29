import React from 'react';
import Breadcrumb from '../../../components/Breadcrumd/Breadcrumb';
import './Dashboard.css';
import { Pie, Line } from 'react-chartjs-2';
import { DATA, OPTIONS } from './ChartConfig';



export default function Dashboard(props) {


    const { location: { pathname } } = props;


    return (
        <div className="dashboard">

            <Breadcrumb pathname={pathname} />

            <div className="dashboard-content">


                <div className="dashboard-card">
                    <div className="dashboard-card-content glass">
                        <div className="dashboard-card-icon">
                            <ion-icon name="person-add-outline"></ion-icon>

                        </div>
                        <div className="dashboard-card-text">
                            <h4>8,282</h4>
                            <p>New Users</p>
                        </div>
                    </div>
                </div>


                <div className="dashboard-card">
                    <div className="dashboard-card-content glass">
                        <div className="dashboard-card-icon">

                            <ion-icon name="cart-outline"></ion-icon>
                        </div>
                        <div className="dashboard-card-text">
                            <h4>200,521</h4>
                            <p>Total Orders</p>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card">
                    <div className="dashboard-card-content  glass">
                        <div className="dashboard-card-icon">
                            <ion-icon name="videocam-outline"></ion-icon>
                        </div>
                        <div className="dashboard-card-text">
                            <h4>215,542</h4>
                            <p>Available Products</p>
                        </div>
                    </div>
                </div>





                <div className="chart-item glass pie-chart">
                    <Pie data={DATA} options={OPTIONS} />
                </div>
                <div className="chart-item glass line-chart md:col-span-2">
                    <Line data={DATA} options={OPTIONS} />
                </div>


                <div className="order-list  glass md:col-span-2 p-5 rounded-[15px]">
                    <div className="order-list-title">
                        <h4 className="text-2xl">Recent Orders</h4>
                    </div>
                    <table className="w-full">
                        <thead className="text-left border-b border-b-white/10">
                            <tr>
                                <th>Name</th>
                                <th>Order</th>
                                <th>Payment</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jenkins</td>
                                <td>$120</td>
                                <td>Due</td>
                                <td><span className="p-1 bg-yellow-500 rounded-md">Pending</span></td>
                            </tr>
                            <tr>
                                <td>Roger</td>
                                <td>$60</td>
                                <td>Paid</td>
                                <td><span className="p-1 bg-red-500 rounded-md">Return</span></td>
                            </tr>
                            <tr>
                                <td>Anna</td>
                                <td>$420</td>
                                <td>Paid</td>
                                <td><span className="p-1 bg-green-500 rounded-md">Success</span></td>
                            </tr>
                            <tr>
                                <td>Louis</td>
                                <td>$20</td>
                                <td>Due</td>
                                <td><span className="p-1 bg-blue-500 rounded-md">In progress</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="members-list glass p-5  rounded-[15px]">
                    <div className="member-list-title mb-5 flex justify-between ">
                        <span className="text-2xl">Status</span>
                        <h4 className="text-2xl">New Members</h4>
                    </div>
                    <div className="member-items">
                        <div className="member-item flex items-center  mb-5">
                            <div className="item-status w-1/3">
                                <span>online</span>
                            </div>
                            <div className="flex space-x-4 w-2/3 pl-4">
                                <div className="flex-shrink-0">
                                    <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-12 h-12 rounded-full bg-coolGray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Leroy Jenkins</h4>
                                    <span className="text-xs text-coolGray-600">2 days ago</span>
                                </div>
                            </div>

                        </div>

                        <div className="member-item flex items-center mb-5">
                            <div className="item-status w-1/3">
                                <span className="text-white/25">offline</span>
                            </div>
                            <div className="flex space-x-4 w-2/3 pl-4">
                                <div className="flex-shrink-0">
                                    <img src="https://source.unsplash.com/60x50/?portrait" alt="avatar" className="object-cover w-12 h-12 rounded-full bg-coolGray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Roger</h4>
                                    <span className="text-xs text-coolGray-600">1 days ago</span>
                                </div>
                            </div>

                        </div>

                        <div className="member-item flex  items-center mb-5">
                            <div className="item-status w-1/3">
                                <span>online</span>
                            </div>
                            <div className="flex space-x-4 w-2/3 pl-4">
                                <div className="flex-shrink-0">
                                    <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-12 h-12 rounded-full bg-coolGray-500 " />
                                </div>
                                <div>
                                    <h4 className="font-bold">Beneath Anna Poliatova </h4>
                                    <span className="text-xs text-coolGray-600">25 minutes ago</span>
                                </div>
                            </div>





                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
