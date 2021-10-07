import React, { useEffect, useState,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Seat from '../../components/Seat/Seat';
import { buyTicketAction, getRoomDetailsAction, setOtherTicketsAction } from '../../redux/actions/BookingTicketAction';
import { getUserProfileAction } from '../../redux/actions/UserAction';
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe';
import './Checkout.css';
import { connection } from '../..';
import _ from 'lodash';
import { USER_LOGIN } from '../../util/settings/config';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import Breadcrumb from '../../components/Breadcrumd/Breadcrumb';



export default function Checkout(props) {

    const [done, setDone] = useState(false);

    const { userLogin } = useSelector(state => state.UserReducer);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    // Fix client click sign out button

    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to='/login' />
    }

    const { location: { pathname } } = props;

    return (
        <div className="checkout w-full flex min-height-screen  flex-col">

            <Breadcrumb pathname={pathname} />

            <div className="w-full h-full text-white flex justify-center items-center py-20 relative z-0">
                <div className="checkout-container glass">
                    <div className="checkout-navbar w-full flex justify-between items-center p-10">
                        <ul className="tabs">
                            <li className={`tabPane ${done ? '' : 'active'}`}>01 Booking & Payment</li>
                            <li className={`tabPane ${done ? 'active' : ''}`}>02 Results</li>
                        </ul>
                        
                    </div>
                    <div className="checkout-content p-10">
                        {done ? <BookingResult {...props} /> : <BookingRoom {...props} setDone={setDone} userLogin={userLogin} />}
                    </div>
                </div>
            </div>
        </div>
    )
}



function BookingRoom(props) {


    const { email, soDT, taiKhoan } = props.userLogin;

    const { tickets, roomDetails, otherTickets } = useSelector(state => state.BookingTicketReducer);

    const { danhSachGhe, thongTinPhim } = roomDetails;

    const total = tickets.reduce((total, ticket) => {
        return total += ticket.giaVe;
    }, 0);

    const dispatch = useDispatch();
    
    const {id} = props.match.params;

    const clearSeats = useCallback (()=>{
        connection.invoke('huyDat', taiKhoan,id);
    },[taiKhoan,id]); 

    useEffect(() => {
       

        dispatch(getRoomDetailsAction(id));

        connection.invoke('loadDanhSachGhe', id);

        connection.on('datVeThanhCong', () => {
            dispatch(getRoomDetailsAction(id));
        });

        // Load checking-Seats from server
        connection.on("loadDanhSachGheDaDat", (checkingSeats) => {


            checkingSeats = checkingSeats.filter(seat => seat.taiKhoan !== taiKhoan);

            let otherSeats = checkingSeats.reduce((results, seats, index) => {
                let currentSeats = JSON.parse(seats.danhSachGhe);
                return [...results, ...currentSeats];
            }, []);

            // Set redux            
            otherSeats = _.uniqBy(otherSeats, 'maGhe');

            dispatch(setOtherTicketsAction(otherSeats));
        });

        // set event while reload pages

        window.addEventListener('beforeunload', clearSeats);

        return () => {
            clearSeats();
            window.addEventListener('beforeunload', clearSeats);
        }
    }, [id,taiKhoan,clearSeats,dispatch]);

    

    const { setDone } = props;

    const renderSeats = () => {
        return danhSachGhe.map((seat, index) => {

            let check = tickets.findIndex(s => s.maGhe === seat.maGhe);
            let otherCheck = otherTickets?.findIndex(s => s.maGhe === seat.maGhe);

            const id = props.match.params.id;

            return <Seat key={index} seat={seat} user={taiKhoan} other={otherCheck} check={check} id={id} />

        })
    }

    const renderTickets = () => {
        return tickets.map((ticket, index) => {
            return <span key={index} className="text-green-500 font-bold text-xl inline-block mx-1">{ticket.stt}</span>
        })
    }

    const handleClick = async () => {

        // Validate checkout here

        if (tickets === null || tickets.length === 0) {
            return alert("Please select seat");
        }



        // call api 

        const info = new ThongTinDatVe();
        info.maLichChieu = props.match.params.id;
        info.danhSachVe = tickets;
        await dispatch(buyTicketAction(info));

        setDone(true);
    }

    return (
        <div className="w-full text-white">
            <div className="mx-auto">
                <div className="block md:flex items-center h-full">
                    <div className="seatmap w-full md:w-3/4 h-full mr-10">
                        <div className="seatmap-screen">
                            <div className="screen-title flex">
                                <div className="flex">
                                    <div className="img-box rounded-full overflow-hidden">
                                        <img src="https://picsum.photos/50" alt="cinema" />
                                    </div>
                                    <div className="ml-2">
                                        <h5 className="font-bold">
                                            {thongTinPhim.tenCumRap}</h5>
                                        <p>{thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="screen-img my-5 relative">
                                <div className="screen w-full h-4 bg-orange-400"></div>
                                <div className="screen-shadow"></div>
                                <div className="screen-name w-full absolute top-8 text-center">
                                    <p className="text-center font-bold">Screen</p>
                                </div>
                            </div>
                        </div>
                        <div className="seats grid grid-cols-16 grid-rows-10 gap-1 lg:gap-3 my-10">
                            {renderSeats()}
                        </div>
                        <div className="seatmap-description">
                            <div className="seat-description">
                                <div className="description-item">
                                    <h5>Normal</h5>
                                    <span className="seat"></span>
                                </div>
                                <div className="description-item">
                                    <h5>VIP</h5>
                                    <span className="seat vip"></span>
                                </div>
                                <div className="description-item">
                                    <h5>Booked</h5>
                                    <span className="seat checked"></span>
                                </div>
                                <div className="description-item">
                                    <h5>Checking</h5>
                                    <span className="seat check"></span>
                                </div>
                            </div>
                            <div className="user-description">
                                <span className="mx-2"><ion-icon name="person-outline"></ion-icon> : Your seat</span>
                                <span className="mx-2"><ion-icon name="people-outline"></ion-icon> : Other's seat</span>
                            </div>
                        </div>
                    </div>

                    <div className="ticket-details w-full md:w-1/4  h-full px-5 py-10 flex flex-col items-center bg-black bg-opacity-25 rounded-md">
                        <div className="ticket-details-text">
                            <div className="total-payment w-full text-center">
                                <span className="text-2xl font-bold text-green-600">{`${total.toLocaleString()}$`}</span>
                            </div>
                            <hr />

                            <div className="my-4">
                                <h4 className="font-bold">{thongTinPhim.tenPhim}</h4>
                                <p>{thongTinPhim.diaChi}</p>
                                <p>{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</p>
                            </div>
                            <hr />
                            <div className="flex justify-between my-4">
                                <p className="text-red-500 font-bold text-xl">Ghe:</p>
                                <div className="flex flex-wrap mx-2 justify-around">
                                    {renderTickets()}
                                </div>
                                <span className="text-green-500 font-bold text-xl">{`${total.toLocaleString()}$`}</span>
                            </div>
                            <hr />
                            <div className="input-group">
                                <label>E-mail</label>
                                <input type="text" className="form-control" value={email} readOnly />
                            </div>
                            <div className="input-group">
                                <label>Phone</label>
                                <input type="text" className="form-control" value={soDT} readOnly />
                            </div>

                        </div>
                        <div className="ticket-details-button w-full mt-10">
                            <button type="button" className="w-full bg-purple-700 bg-opacity-80 hover:bg-opacity-100 p-4 text-white font-bold text-2xl" onClick={handleClick} >Dat Ve</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function BookingResult(props) {

    const { thongTinDatVe } = useSelector(state => state.UserReducer.userProfile);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserProfileAction());
    }, [dispatch]);


    const renderTicketInfomation = () => {


        if (thongTinDatVe.length === 0 || thongTinDatVe === null) {
            return (
                <div className="h-full w-full flex justify-center items-center">
                    <span className="text-4xl">Empty</span>
                </div>
            )
        } else {
            return thongTinDatVe.map((item, index) => {

                const { danhSachGhe, hinhAnh, tenPhim, ngayDat, thoiLuongPhim } = item;

                return (
                    <div key={index} className="glass p-4 flex rounded-md my-5">
                        <div className="movie-poster rounded-md overflow-hidden">
                            <img className="w-[150px] h-[150px]" src={hinhAnh} alt="movie poster" />
                        </div>
                        <div className="w-full pl-5">
                            <div className="bg-coolGray-50 text-coolGray-800 w-full h-full rounded-md p-2">
                                <h4 className="text-xl font-bold">{tenPhim} - {thoiLuongPhim} minutes</h4>
                                <p>{danhSachGhe[0].tenHeThongRap} - {danhSachGhe[0].tenCumRap}</p>
                                <p>At: {moment(ngayDat).format('DD/MM/YYYY hh:mm:ss')}</p>
                                <span>Ticket:</span>
                                {danhSachGhe.map((seat, i) => {
                                    return <span key={i} className="text-blue-500">
                                        {` [${seat.tenGhe}] `}
                                    </span>
                                })}
                            </div>
                        </div>

                    </div>
                )
            })
        }

    }


    return (

        <div className="booking-result">
            <div className="booking-result-text text-center mb-20">
                <h1 className="booking-result-titles lg:text-4xl font-bold">Recent Booking History</h1>
                <p>lorem ipsum dolor sit amet, consectet</p>
            </div>
            <div className="flex w-[90%] mx-auto glass rounded-md flex-col p-10 mt-4">

                <div className="h-[600px] w-full overflow-y-scroll">
                    {renderTicketInfomation()}

                </div>
            </div>
        </div>
    )
}