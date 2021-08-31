import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import * as Yup from 'yup';
import { GROUPID } from '../../../../util/settings/config';
import {  getEditMovie, updateMovieAction } from '../../../../redux/actions/MovieAction';

export default function EditMovie(props) {

    const dispatch = useDispatch();

    const { editMovie } = useSelector(state => state.MovieReducer);

    const [startDate, setStartDate] = useState(new Date());

    const [imgSrc, setImgSrc] = useState(null);

    useEffect(() => {
        const { id } = props.match.params;
        dispatch(getEditMovie(id))
    })

    const formSchema = Yup.object().shape({
        tenPhim: Yup.string().required(),
        trailer: Yup.string().url().required(),
        moTa: Yup.string().required(),
        ngayKhoiChieu: Yup.date().required(),
        danhGia: Yup.number().required()
    })

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: editMovie.maPhim,
            tenPhim: editMovie.tenPhim,
            trailer: editMovie.trailer,
            moTa: editMovie.moTa,
            ngayKhoiChieu: editMovie.ngayKhoiChieu,
            dangChieu: editMovie.dangChieu,
            sapChieu: editMovie.sapChieu,
            hot: editMovie.hot,
            danhGia: editMovie.danhGia,
            maNhom: GROUPID,
            hinhAnh: null
        },

        validationSchema: formSchema,

        onSubmit: values => {

            let formData = new FormData();

            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    if (values[key] !== null) {
                        formData.append(key, values[key], values[key].name);
                    }

                }
            }
           
            dispatch(updateMovieAction(formData));

        },

    });

    const handleChangeDatePicker = (date) => {

        setStartDate(date);

        formik.setFieldValue('ngayKhoiChieu', date);
    }

    const handleChangeFileInput = async (e) => {

        const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

        const { files } = e.target;

        let selectedFile = files[0];

        let reader = new FileReader();

        if (SUPPORTED_FORMATS.includes(selectedFile.type)) {

            await formik.setFieldValue('hinhAnh', selectedFile);

            reader.readAsDataURL(selectedFile);

            reader.onload = (e) => {

                let { result } = e.target;

                setImgSrc(result);
            }


        }


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
                    <h1 className="text-4xl font-bold mb-10">Edit Movie</h1>
                    <form noValidate className="space-y-6 ng-untouched ng-pristine ng-valid" onSubmit={formik.handleSubmit}>
                        <div className="space-y-1 text-sm flex items-start">
                            <label htmlFor="name" className="block text-white mr-2 mt-4">Name:</label>
                            <div className="relative w-full min-h-[70px] my-0">
                                <input type="text" name="tenPhim" id="name" placeholder="movie's name" className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none"
                                    value={formik.values.tenPhim}
                                    onChange={formik.handleChange} />
                                <span className="abosolute left-0 bottom-2 text-sm text-red-500">{formik.errors.tenPhim}</span>
                            </div>
                        </div>
                        <div className="space-y-1 text-sm flex items-start">
                            <label htmlFor="trailer" className="block text-white mr-2 mt-4">Trailer:</label>
                            <div className="relative w-full min-h-[70px] my-0">
                                <input type="text" name="trailer" id="trailer" placeholder="https://..." className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none"
                                    value={formik.values.trailer}
                                    onChange={formik.handleChange} />
                                <span className="abosolute left-0 bottom-2 text-sm text-red-500">{formik.errors.trailer}</span>
                            </div>
                        </div>
                        <div className="space-y-1 text-sm flex">
                            <label htmlFor="description" className="block text-white mr-2 mt-4 ">Description:</label>
                            <div className="relative w-full min-h-[70px] my-0">
                                <textarea type="text" name="moTa" id="description" placeholder="write something about movie ..." className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none"
                                    value={formik.values.moTa}
                                    onChange={formik.handleChange} />
                                <span className="abosolute left-0 bottom-2 text-sm text-red-500">{formik.errors.moTa}</span>
                            </div>

                        </div>
                        <div className="space-y-1 text-sm flex items-start">
                            <label htmlFor="date" className="block text-white mr-2 mt-4">Opening day:</label>
                            <div className="relative w-full min-h-[70px] my-0">
                                <DatePicker
                                    className="w-auto px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none"
                                    dateFormat="dd/MM/yyyy"
                                    value={moment(formik.values.ngayKhoiChieu, 'dd/MM/yyyy')}
                                    selected={startDate}
                                    onChange={handleChangeDatePicker} />
                                <span className="abosolute left-0 bottom-2 text-sm text-red-500">{formik.errors.ngayKhoiChieu}</span>
                            </div>


                        </div>
                        <div className="space-y-1 text-sm flex items-center">
                            <label htmlFor="nowShowing" className="inline-flex items-center space-x-4 cursor-pointer text-coolGray-800">
                                <span className="block text-white mr-2">Now showing:</span>
                                <span className="relative">
                                    <input id="nowShowing" type="checkbox" name="dangChieu" className="hidden peer"
                                        checked={formik.values.dangChieu}
                                        value={formik.values.dangChieu}
                                        onChange={formik.handleChange} />
                                    <div className="w-10 h-6 rounded-full shadow-inner bg-coolGray-600 peer-checked:bg-violet-600" />
                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-coolGray-100" />
                                </span>
                            </label>
                        </div>
                        <div className="space-y-1 text-sm flex items-center">
                            <label htmlFor="comingSoon" className="inline-flex items-center space-x-4 cursor-pointer text-coolGray-800">
                                <span className="block text-white mr-2">Coming soon:</span>
                                <span className="relative">
                                    <input id="comingSoon" type="checkbox" name="sapChieu" className="hidden peer"
                                        checked={formik.values.sapChieu}
                                        value={formik.values.sapChieu}
                                        onChange={formik.handleChange} />
                                    <div className="w-10 h-6 rounded-full shadow-inner bg-coolGray-600 peer-checked:bg-violet-600" />
                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-coolGray-100" />
                                </span>
                            </label>
                        </div>
                        <div className="space-y-1 text-sm flex items-center">
                            <label htmlFor="newRelease" className="inline-flex items-center space-x-4 cursor-pointer text-coolGray-800">
                                <span className="block text-white mr-2">New Release:</span>
                                <span className="relative">
                                    <input id="newRelease" type="checkbox" name="hot" className="hidden peer"
                                        value={formik.values.hot}
                                        checked={formik.values.hot}
                                        onChange={formik.handleChange} />
                                    <div className="w-10 h-6 rounded-full shadow-inner bg-coolGray-600 peer-checked:bg-violet-600" />
                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-coolGray-100" />
                                </span>
                            </label>
                        </div>
                        <div className="space-y-1 text-sm flex items-start">
                            <label htmlFor="rate" className="block text-white mr-2 mt-4">Rate:</label>
                            <div className="relative w-full min-h-[70px] my-0">
                                <input type="number" min={1} max={10} name="danhGia" id="rate" placeholder="1-10" className="w-auto px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none"
                                    value={formik.values.danhGia}
                                    onChange={formik.handleChange} />
                                <span className="abosolute left-0 bottom-2 text-sm text-red-500">{formik.errors.danhGia}</span>
                            </div>

                        </div>
                        <div className="space-y-1 text-sm flex items-center">
                            <fieldset className="w-auto flex space-y-1 text-white mr-10">
                                <label htmlFor="files" className="block text-white mr-10">Poster:</label>
                                <div className="flex">
                                    <input
                                        type="file"
                                        id="files"
                                        accept="image/png,image/jpeg,image/jpg,image/gif"
                                        onChange={handleChangeFileInput}
                                        className="px-6 py-10 border-2 border-dashed rounded-md border-coolGray-300   bg-coolGray-50 bg-opacity-10 text-white outline-none" />
                                    <span className="abosolute left-0 bottom-2 text-sm text-red-500">{formik.errors.hinhAnh}</span>
                                </div>
                            </fieldset>
                            <div className=" img-box w-[80px] h-[100px] rounded-md overflow-hidden border border-solid border-coolGray-50 bg-[{}] bg-opacity-10 p-1">
                                <img className="w-full h-full  rounded-md" src={imgSrc === null ? editMovie.hinhAnh : imgSrc} alt="review" />
                            </div>
                        </div>
                        <div className="flex items-center" >
                            <span className="block text-white mr-10">Action:</span>
                            <button type="submit" className="block w-auto px-6 py-2 text-center rounded-lg text-white text-xl bg-violet-600 bg-opacity-40 hover:bg-opacity-90 mx-4">Edit</button>

                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}
