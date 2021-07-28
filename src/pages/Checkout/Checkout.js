import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Seat from '../../components/Seat/Seat';
import { buyTicketAction, getRoomDetailsAction } from '../../redux/actions/BookingTicketAction';
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe';
import './Checkout.css';




export default function Checkout(props) {

    const [done, setDone] = useState(false);



    return (
        <div className="checkout w-full">
            <div className="checkout-container w-full min-h-screen text-white flex justify-center items-center">
                <div className="container mx-auto">
                    <div className="checkout-navbar w-full flex justify-between items-center p-10">
                        <ul className="tabs flex items-center">
                            <li className={`tabPane ${done ? '' : 'active'}`}>01 Checkout & Payment</li>
                            <li className={`tabPane ${done ? 'active' : ''}`}>02 Results</li>
                        </ul>
                        <div className="user-login flex items-center">
                            <div className="img-box">
                                <img className="avatar" src="https://picsum.photos/50" alt="avatar" />
                            </div>
                            <span className="userName">Nguyen Van A</span>
                        </div>
                    </div>
                    <div className="checkout-content p-10">
                        {done ? <CheckoutResult {...props} /> : <SeatCheckout {...props} setDone={setDone} />}
                    </div>
                </div>
            </div>
        </div>
    )
}



function SeatCheckout(props) {


    const { email, soDT, taiKhoan } = useSelector(state => state.UserReducer.userLogin);

    const { tickets, roomDetails } = useSelector(state => state.BookingTicketReducer);

    const { danhSachGhe, thongTinPhim } = roomDetails;

    const total = tickets.reduce((total, ticket) => {
        return total += ticket.giaVe;
    }, 0);
    console.log({ danhSachGhe });
    const dispatch = useDispatch();


    useEffect(() => {
        const id = props.match.params.id;

        dispatch(getRoomDetailsAction(id));
    }, []);


    const { setDone } = props;

    const renderSeats = () => {
        return danhSachGhe.map((seat, index) => {

            return <Seat key={index} seat={seat} user={taiKhoan} />

        })
    }

    const renderTickets = () => {
        return tickets.map((ticket, index) => {
            return <span key={index} className="text-green-500 font-bold text-xl inline-block mx-1">{ticket.stt}</span>
        })
    }

    const handleClick = () => {

        // Validate checkout here

        if (tickets === null || tickets.length === 0) {
            return alert("Please select seat");
        }

        setDone(true);

        // call api to save infomation 

        const info = new ThongTinDatVe();
        info.maLichChieu = props.match.params.id;
        info.danhSachVe = tickets;
        dispatch(buyTicketAction(info));
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
                        <div className="seats grid grid-cols-16 grid-rows-10 gap-1 lg:gap-3">
                            {renderSeats()}
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


function CheckoutResult(props) {



    return (
        <div className="checkout-result">
            this is checkout-results
        </div>
    )
}