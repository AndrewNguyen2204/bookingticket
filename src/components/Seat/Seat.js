import React from 'react'
import { useDispatch } from 'react-redux';
import { checkingSeatAction} from '../../redux/actions/BookingTicketAction';
import './Seat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';



export default function Seat(props) {


    const dispatch = useDispatch();

    const {
        daDat,       
        loaiGhe,       
        taiKhoanNguoiDat,
        tenGhe
    } = props.seat;

    const isClick = (props.check !== -1 || props.other !== -1) ? 'check' : '';

    const isChecked = daDat ? 'checked' : '';

    const isVip = loaiGhe === 'Vip' ? 'vip' : '';

    const isOther = props.other !== -1 ? 'other' : '';

    let content = tenGhe;

    if (daDat || isClick !== '') {
        content = (props.user === taiKhoanNguoiDat ||props.check !== -1) ? <FontAwesomeIcon icon={faUser} /> : <FontAwesomeIcon icon={faUserFriends} />;
    }

    const handleClick = () => {

        dispatch(checkingSeatAction(props.seat, props.id));
    }


    return (
        <div className="seat-box">
            <span className={`seat ${isChecked} ${isVip} ${isClick} ${isOther} `} onClick={handleClick} >{content}</span>
        </div>
    )
}
