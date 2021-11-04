import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './AddMovie.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from 'yup';
import { GROUPID } from '../../../../util/settings/config';
import { addMovieAction } from '../../../../redux/actions/MovieAction';
import moment from 'moment';
import Breadcrumb from '../../../../components/Breadcrumd/Breadcrumb';

export default function AddMovie(props) {

    const dispatch = useDispatch();

    const [startDate, setStartDate] = useState(new Date());

    const [imgSrc, setImgSrc] = useState(null);


    const formSchema = Yup.object().shape({
        tenPhim: Yup.string().required(),
        trailer: Yup.string().url().required(),
        moTa: Yup.string().required(),
        ngayKhoiChieu: Yup.string().required(),
        danhGia: Yup.number().required().min(1).max(10),
        hinhAnh: Yup.mixed().required(),
    })

    const formik = useFormik({

        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: 0,
            hinhAnh: ''
        },

        validationSchema: formSchema,

        onSubmit: values => {

            values.maNhom = GROUPID;
            let formData = new FormData();
            
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    formData.append(key, values[key], values[key].name);
                }
            }

            dispatch(addMovieAction(formData));
        },

    });

    const handleChangeDatePicker = (date) => {

        setStartDate(date);
        let ngayKhoiChieu = moment(date).format('DD/MM/YYYY');
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
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

    const {location:{pathname}} = props;

    return (
        <div className="w-full min-height-screen flex flex-col">
            <Breadcrumb pathname={pathname} />

            <div className="add-form w-full h-full flex items-center justify-center">
                <div className="add-form-content w-[90%] h-[90%] glass p-20">
                    <h1 className="text-4xl font-bold mb-10">Add Movie</h1>
                    <form noValidate className="space-y-6 ng-untouched ng-pristine ng-valid" onSubmit={formik.handleSubmit}>
                        <div className="space-y-1 text-sm flex items-start">
                            <label htmlFor="name" className="block text-white mr-2 mt-4">Name:</label>
                            <div className="relative w-full min-h-[70px] my-0">
                                <input type="text" name="tenPhim" id="name" placeholder="movie's name" className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none" onChange={formik.handleChange} />
                                <span className="abosolute left-0 bottom-2 text-sm text-red-500">{formik.errors.tenPhim}</span>
                            </div>
                        </div>
                        <div className="space-y-1 text-sm flex items-start">
                            <label htmlFor="trailer" className="block text-white mr-2 mt-4">Trailer:</label>
                            <div className="relative w-full min-h-[70px] my-0">
                                <input type="text" name="trailer" id="trailer" placeholder="https://..." className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none" onChange={formik.handleChange} />
                                <span className="abosolute left-0 bottom-2 text-sm text-red-500">{formik.errors.trailer}</span>
                            </div>
                        </div>
                        <div className="space-y-1 text-sm flex">
                            <label htmlFor="description" className="block text-white mr-2 mt-4 ">Description:</label>
                            <div className="relative w-full min-h-[70px] my-0">
                                <textarea type="text" name="moTa" id="description" placeholder="write something about movie ..." className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none" onChange={formik.handleChange} />
                                <span className="abosolute left-0 bottom-2 text-sm text-red-500">{formik.errors.moTa}</span>
                            </div>

                        </div>
                        <div className="space-y-1 text-sm flex items-start">
                            <label htmlFor="date" className="block text-white mr-2 mt-4">Opening day:</label>
                            <div className="relative w-full min-h-[70px] my-0">
                                <DatePicker
                                    className="w-auto px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none"
                                    dateFormat="dd/MM/yyyy"
                                    selected={startDate}
                                    onChange={handleChangeDatePicker} />
                                <span className="abosolute left-0 bottom-2 text-sm text-red-500">{formik.errors.ngayKhoiChieu}</span>
                            </div>


                        </div>
                        <div className="space-y-1 text-sm flex items-center">
                            <label htmlFor="nowShowing" className="inline-flex items-center space-x-4 cursor-pointer text-coolGray-800">
                                <span className="block text-white mr-2">Now showing:</span>
                                <span className="relative">
                                    <input id="nowShowing" type="checkbox" name="dangChieu" className="hidden peer" onChange={formik.handleChange} />
                                    <div className="w-10 h-6 rounded-full shadow-inner bg-coolGray-600 peer-checked:bg-violet-600" />
                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-coolGray-100" />
                                </span>
                            </label>
                        </div>
                        <div className="space-y-1 text-sm flex items-center">
                            <label htmlFor="comingSoon" className="inline-flex items-center space-x-4 cursor-pointer text-coolGray-800">
                                <span className="block text-white mr-2">Coming soon:</span>
                                <span className="relative">
                                    <input id="comingSoon" type="checkbox" name="sapChieu" className="hidden peer" onChange={formik.handleChange} />
                                    <div className="w-10 h-6 rounded-full shadow-inner bg-coolGray-600 peer-checked:bg-violet-600" />
                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-coolGray-100" />
                                </span>
                            </label>
                        </div>
                        <div className="space-y-1 text-sm flex items-center">
                            <label htmlFor="newRelease" className="inline-flex items-center space-x-4 cursor-pointer text-coolGray-800">
                                <span className="block text-white mr-2">New Release:</span>
                                <span className="relative">
                                    <input id="newRelease" type="checkbox" name="hot" className="hidden peer" onChange={formik.handleChange} />
                                    <div className="w-10 h-6 rounded-full shadow-inner bg-coolGray-600 peer-checked:bg-violet-600" />
                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-coolGray-100" />
                                </span>
                            </label>
                        </div>
                        <div className="space-y-1 text-sm flex items-start">
                            <label htmlFor="rate" className="block text-white mr-2 mt-4">Rate:</label>
                            <div className="relative w-full min-h-[70px] my-0">
                                <input type="number" min={1} max={10} name="danhGia" id="rate" placeholder="1-10" className="w-auto px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none" onChange={formik.handleChange} />
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
                            <div className={`${imgSrc === null && 'hidden'} img-box w-[80px] h-[100px] rounded-[20px] overflow-hidden border border-solid border-coolGray-50 bg-coolGray-50 bg-opacity-10 p-1`}>
                                <img className="w-full h-full  rounded-[20px]" src={imgSrc} alt="review" />
                            </div>
                        </div>
                        <div className="flex items-center" >
                            <span className="block text-white mr-10">Action:</span>
                            <button type="submit" className="block w-auto px-6 py-2 text-center rounded-full text-white text-xl bg-mainColor bg-opacity-40 hover:bg-opacity-90 mx-4">Add</button>

                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}
