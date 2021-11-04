import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from 'yup';
import { GROUPID } from '../../../../util/settings/config';
import { addUserAction, getUserEditAction, editUserAction } from '../../../../redux/actions/UserAction';
import Breadcrumb from '../../../../components/Breadcrumd/Breadcrumb';

export default function EditUser(props) {

    const { userEdit } = useSelector(state => state.UserReducer);

    const dispatch = useDispatch();
    
    const { account } = props.match.params;

    useEffect(() => {
       

        if (account !== undefined) {
            dispatch(getUserEditAction(account));
        }
    }, [dispatch,account]);

    

    const isEdit = account !== undefined ? true : false;


    const formSchema = Yup.object().shape({
        hoTen: Yup.string().required(),
        email: Yup.string().email().required(),

    })

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: userEdit.taiKhoan,
            matKhau: userEdit.matKhau,
            email: userEdit.email,
            soDt: userEdit.soDt,
            maNhom: GROUPID,
            maLoaiNguoiDung: userEdit.maLoaiNguoiDung,
            hoTen: userEdit.hoTen

        },

        validationSchema: formSchema,

        onSubmit: values => {
            console.log(values);
            if (isEdit) {
               
                dispatch(editUserAction(values));
            } else {

                dispatch(addUserAction(values));
            }

        },

    });


    const { location: { pathname } } = props;

    return (
        <div className="w-full min-height-screen flex flex-col">
            <Breadcrumb pathname={pathname} />


            <div className="w-full h-full flex items-center justify-center">
                <div className="add-form-content w-[90%] h-[90%] glass p-20">
                    <h1 className="text-4xl font-bold mb-10">{isEdit ? 'Edit User' : 'Add User'}</h1>
                    <form noValidate className="space-y-6 ng-untouched ng-pristine ng-valid" onSubmit={formik.handleSubmit}>
                        <div className="flex">
                            <div className="space-y-1 text-sm flex flex-col w-1/2 p-2">
                                <label htmlFor="name" className="inline-block text-white mr-2 mt-4">Name:</label>
                                <div className="relative w-full min-h-[70px] my-0">
                                    <input
                                        type="text"
                                        name="hoTen" id="name" placeholder="name" className="w-full px-4 py-3 rounded-full border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none"
                                        onChange={formik.handleChange}
                                        value={formik.values.hoTen}
                                    />
                                    <span className="abosolute left-0 bottom-2 text-sm text-red-500">{formik.errors.hoTen}</span>
                                </div>
                            </div>
                            <div className="space-y-1 text-sm flex flex-col w-1/2 p-2">
                                <label htmlFor="email" className="inline-block text-white mr-2 mt-4">Email:</label>
                                <div className="relative w-full min-h-[70px] my-0">
                                    <input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-full border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none"
                                        value={formik.values.email}
                                        onChange={formik.handleChange} />
                                    <span className="abosolute left-0 bottom-2 text-sm text-red-500">{formik.errors.email}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="space-y-1 text-sm flex flex-col w-1/2 p-2">
                                <label htmlFor="username" className="inline-block text-white mr-2 mt-4">Username:</label>
                                <div className="relative w-full min-h-[70px] my-0">
                                    <input type="text" name="taiKhoan" id="username" placeholder="username" className="w-full px-4 py-3 rounded-full border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none"
                                        value={formik.values.taiKhoan}
                                        onChange={formik.handleChange} />
                                    <span className="abosolute left-0 bottom-2 text-sm text-red-500">{formik.errors.taiKhoan}</span>
                                </div>
                            </div>
                            <div className="space-y-1 text-sm flex flex-col w-1/2 p-2">
                                <label htmlFor="password" className="inline-block text-white mr-2 mt-4">Password:</label>
                                <div className="relative w-full min-h-[70px] my-0">
                                    <input type="password" name="matKhau" id="password" placeholder="password" className="w-full px-4 py-3 rounded-full border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none"
                                        value={formik.values.matKhau}
                                        onChange={formik.handleChange} />
                                    <span className="abosolute left-0 bottom-2 text-sm text-red-500">{formik.errors.matKhau}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="space-y-1 text-sm flex flex-col w-1/2 p-2">
                                <label htmlFor="phone" className="inline-block text-white mr-2 mt-4">Phone:</label>
                                <div className="relative w-full min-h-[70px] my-0">
                                    <input type="text" name="soDt" id="phone" placeholder="phone" className="w-full px-4 py-3 rounded-full border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none"
                                        value={formik.values.soDt}
                                        onChange={formik.handleChange} />
                                    <span className="abosolute left-0 bottom-2 text-sm text-red-500">{formik.errors.soDt}</span>
                                </div>
                            </div>
                            <div className="space-y-1 text-sm flex flex-col w-1/2 p-2">
                                <label htmlFor="type" className="inline-block text-white mr-2 mt-4">Type:</label>
                                <div className="relative w-full min-h-[70px] my-0">
                                    <input type="text" name="maLoaiNguoiDung" id="type" placeholder="movie's name" className="w-full px-4 py-3 rounded-full border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none"
                                        value={formik.values.maLoaiNguoiDung}
                                        onChange={formik.handleChange} />
                                    <span className="abosolute left-0 bottom-2 text-sm text-red-500">{formik.errors.maLoaiNguoiDung}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                disabled={isEdit}
                                type="submit"
                                className="block w-auto px-6 py-2 text-center rounded-full text-white text-xl bg-mainColor opacity-70 hover:opacity-90 mx-4 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:opacity-50 disabled:hover:opacity-50">Add</button>
                            <button
                                disabled={!isEdit}
                                type="submit"
                                className="block w-auto px-6 py-2 text-center rounded-full text-white text-xl bg-mainColor opacity-70 hover:opacity-90 mx-4 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:opacity-50 disabled:hover:opacity-50">Edit</button>

                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}
