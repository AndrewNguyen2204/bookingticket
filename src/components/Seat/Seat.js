import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setTicketsAction } from '../../redux/actions/BookingTicketAction';
import './Seat.css';

export default function Seat(props) {

    const [check, setCheck] = useState(false);

    const dispatch = useDispatch();
    const {
        daDat,
        giaVe,
        loaiGhe,
        maGhe,
        maRap,
        stt,
        taiKhoanNguoiDat,
        tenGhe
    } = props.seat;

    const isClick = check ? 'check' : '';

    const isChecked = daDat ? 'checked' : '';

    const isVip = loaiGhe === 'Vip' ? 'vip' : '';

    const content = daDat ? (props.user === taiKhoanNguoiDat) ? 'Y' : 'X' : tenGhe

    const handleClick = () => {
        setCheck(!check);
        dispatch(setTicketsAction(props.seat));
    }


    return (
        <div className="seat-box">
            <span className={`seat ${isChecked} ${isVip} ${isClick} `} onClick={handleClick} >{content}</span>
        </div>
    )
}
