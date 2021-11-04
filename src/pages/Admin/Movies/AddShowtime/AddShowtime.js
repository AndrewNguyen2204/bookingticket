import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from 'yup';
import Dropdown from '../../../../components/Dropdown/Dropdown';
import { cinemaService } from '../../../../services/CinemaService';
import { ticketService } from '../../../../services/TicketService';
import { STATUS } from '../../../../util/settings/config';
import moment from 'moment';
import Breadcrumb from '../../../../components/Breadcrumd/Breadcrumb';
import './AddShowtime.css';

export default function AddShowtime(props) {




    const [startDate, setStartDate] = useState(new Date());

    const [state, setState] = useState({
        groups: [],
        cinemas: []
    });



    useEffect(() => {


        async function fetchData() {

            try {
                const result = await cinemaService.getGroups();

                if (result.status === STATUS.SUCCESS) {
                    setState(state => ({ ...state, groups: result.data.content }));

                }

            } catch (e) {
                console.log(e.response?.data);
            }
        }

        fetchData();


    }, []);

    const PRICES = [45000, 75000, 120000];

    const formSchema = Yup.object().shape({
        maRap: Yup.string().required(),
        ngayChieuGioChieu: Yup.date().required(),
        giaVe: Yup.number().required()
    })

    const formik = useFormik({

        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: 0
        },

        validationSchema: formSchema,

        onSubmit: async (values) => {



            let ngayChieuGioChieu = moment(values.ngayChieuGioChieu).format('DD/MM/YYYY hh:mm:ss');

            values.ngayChieuGioChieu = ngayChieuGioChieu;


            try {

                const result = await ticketService.createShowtime(values);

                if (result.status === STATUS.SUCCESS) {
                    alert('create success!');

                }

            } catch (e) {
                console.log(e.response?.data);
            }
        }

    });

    const handleChangeDatePicker = (date) => {

        setStartDate(date);

        formik.setFieldValue('ngayChieuGioChieu', date);
    }

    const handleGroupsChange = async (value) => {

        if (typeof (value) === 'string') {

            try {
                const result = await cinemaService.getCinemas(value);

                if (result.status === STATUS.SUCCESS) {
                    setState({
                        ...state, cinemas: result.data.content
                    })
                }

            } catch (e) {
                console.log(e.response?.data);
            }
        } else {
            setState({
                ...state, cinemas: []
            })
        }


    }

    const handleCinemasChange = (value) => {

        formik.setFieldValue('maRap', value)
    }

    const handlePricesChange = (value) => {

        formik.setFieldValue('giaVe', value)
    }

    let movieParams = {};
    if (localStorage.getItem('movieParams')) {
        movieParams = JSON.parse(localStorage.getItem('movieParams'));
    }

    const { location: { pathname } } = props;

    return (
        <div className="w-full min-height-screen flex flex-col">

            <Breadcrumb pathname={pathname} />


            <div className="add-form w-full h-full flex items-center justify-center">
                <div className="add-form-content w-[90%] h-[90%] p-20 relative z-10">
                    <div className="overlay glass"></div>

                    <h1 className="relative text-4xl font-bold mb-10 ">Create Showtime</h1>
                    <div className="flex flex-grow relative">
                        <div className="flex flex-col w-1/3">
                            <div className="text-box">
                                <h2>{movieParams.tenPhim}</h2>
                            </div>
                            <div className="img-box">
                                <img
                                    src={movieParams.hinhAnh}
                                    alt="poster"
                                    className="w-[200px] h-[350px]"
                                />
                            </div>
                        </div>
                        <div className="w-2/3">
                            <form noValidate className="space-y-6 ng-untouched ng-pristine ng-valid" onSubmit={formik.handleSubmit}>
                                <div className="space-y-1 text-sm flex items-start justify-between">
                                    <label className="block text-white mr-2 mt-4">Branches:</label>
                                    <div className="relative w-2/3">
                                        <Dropdown
                                            title='Choose One'
                                            options={state.groups.map((group, index) => ({
                                                id: index,
                                                label: group.tenHeThongRap,
                                                value: group.maHeThongRap
                                            }))}
                                            onChange={handleGroupsChange}
                                        />
                                    </div>

                                </div>
                                <div className="space-y-1 text-sm flex items-start justify-between">
                                    <label className="block text-white mr-2 mt-4">Cinemas:</label>
                                    <div className="relative w-2/3">
                                        <Dropdown
                                            title='Choose Cinema'
                                            options={state.cinemas.map((cinema, index) => ({
                                                id: index,
                                                label: cinema.tenCumRap,
                                                value: cinema.maCumRap
                                            }))}
                                            onChange={handleCinemasChange}
                                        />
                                    </div>

                                </div>

                                <div className="space-y-1 text-sm flex items-start justify-between">
                                    <label htmlFor="date" className="block text-white mr-2 mt-4">Showtime:</label>
                                    <div className="relative w-2/3 min-h-[70px] my-0">
                                        <DatePicker
                                            className="w-auto px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none"
                                            dateFormat="dd/MM/yyyy h:mm aa"
                                            selected={startDate}
                                            onChange={handleChangeDatePicker}
                                            timeInputLabel="Time:"
                                            showTimeInput
                                        />
                                    </div>

                                </div>
                                <div className="space-y-1 text-sm flex items-start justify-between">
                                    <label className="block text-white mr-2 mt-4">Price:</label>
                                    <div className="relative w-2/3">
                                        <Dropdown
                                            title='Choose Price'
                                            options={PRICES.map((price, index) => ({
                                                id: index,
                                                label: price,
                                                value: price
                                            }))}
                                            onChange={handlePricesChange}
                                        />
                                    </div>

                                </div>
                                <div className="flex items-center justify-between" >
                                    <span className="block text-white ">Action:</span>
                                    <div className="w-2/3">
                                        <button
                                            type="submit"
                                            className="block w-auto px-6 py-2 text-center rounded-full text-white text-xl bg-mainColor opacity-40 hover:opacity-90"
                                            onClick={formik.handleSubmit}
                                        >Create</button>
                                    </div>

                                </div>


                            </form>
                        </div>
                    </div>



                </div>


            </div>

        </div>
    )
}

