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

                <div className="dashboard-cards">
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


                    <div className="dashboard-card my-10 md:mx-10">
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
                </div>


                <div className="dashboard-chart">

                    <div className="chart-item glass pie-chart">
                        <Pie data={DATA} options={OPTIONS} />
                    </div>
                    <div className="chart-item glass line-chart">
                        <Line data={DATA} options={OPTIONS} />
                    </div>
                </div>
                <div className="dashboard-list flex">
                    <div className="order-list w-2/3 glass mr-10 p-5">
                        <div className="order-list-title">
                            <h4>Recent Orders</h4>
                        </div>
                    </div>
                    <div className="members-list w-1/3 glass p-5">
                        <div className="member-list-title mb-5 flex justify-between">
                            <span>Status</span>
                            <h4>New Members</h4>
                        </div>
                        <div className="member-items">
                            <div className="member-item flex justify-between items-center">
                                <div className="item-status">
                                    <span>online</span>
                                </div>
                                <div className="flex space-x-4">
                                    <div>
                                        <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-12 h-12 rounded-full bg-coolGray-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Leroy Jenkins</h4>
                                        <span className="text-xs text-coolGray-600">2 days ago</span>
                                    </div>
                                </div>


                            </div>





                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
