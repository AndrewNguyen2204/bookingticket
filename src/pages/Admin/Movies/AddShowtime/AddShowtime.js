import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from 'yup';
import Dropdown from '../../../../components/Dropdown/Dropdown';
import { cinemaService } from '../../../../services/CinemaService';
import { ticketService } from '../../../../services/TicketService';
import { STATUS } from '../../../../util/settings/config';
import moment from 'moment';

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
                    setState({
                        ...state, groups: result.data.content
                    })
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

        onSubmit: values => {

            console.log({ values });
            try {

                const result = ticketService.createShowtime(values);

                if (result.status === STATUS.SUCCESS) {
                    alert('create success!');
                    console.log(result.data.content);
                }

            } catch (e) {
                console.log(e.response?.data);
            }
        },

    });

    const handleChangeDatePicker = (date) => {

        setStartDate(date);

        let ngayChieuGioChieu = moment(date).format('DD/MM/YYYY hh:mm:ss');

        formik.setFieldValue('ngayChieuGioChieu', ngayChieuGioChieu);
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

            <div className="add-form w-full h-full flex items-center justify-center">
                <div className="add-form-content w-[90%] h-[90%] glass p-20">
                    <h1 className="text-4xl font-bold mb-10">Create Showtime</h1>
                    <div className="flex flex-grow">
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
                                            dateFormat="MM/dd/yyyy h:mm aa"
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
                                            className="block w-auto px-6 py-2 text-center rounded-lg text-white text-xl bg-violet-600 opacity-40 hover:opacity-90"
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

