import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { signupAction } from '../../redux/actions/UserAction';
import { GROUPID } from '../../util/settings/config';
import * as Yup from 'yup';
import Logo from '../../components/Logo/Logo';


export default function Register(props) {

    const dispatch = useDispatch();


    const formSchema = Yup.object().shape({
        taiKhoan: Yup.string().required(),
        matKhau: Yup.string().required(),
        email: Yup.string().email().required(),
        soDt: Yup.string().required(),
        hoTen: Yup.string().required(),

    })

    const formik = useFormik({

        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            hoTen: ''
        },
        validationSchema: formSchema,
        onSubmit: values => {

            values.maNhom = GROUPID;



            dispatch(signupAction(values));

        },

    });



    return (
        <div className="container h-screen mx-auto flex justify-center items-center bg-gray px-2">


           

            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white bg-opacity-10 text-white backdrop-filter backdrop-blur-sm border border-t-2 border-l-2 border-white border-opacity-10 shadow-md">

            <div className="w-full flex justify-center">
                <Logo />
            </div>

                <h1 className="block text-4xl font-bold text-center my-10">Register</h1>
                <form noValidate className="space-y-6 ng-untouched ng-pristine ng-valid" onSubmit={formik.handleSubmit}>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block text-white">Your Name</label>
                        <input type="text" name="hoTen" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-full border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none" onChange={formik.handleChange} />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-white">Email</label>
                        <input type="text" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-full border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none" onChange={formik.handleChange} />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="phone" className="block text-white">Phone</label>
                        <input type="text" name="soDt" id="phone" placeholder="Phone" className="w-full px-4 py-3 rounded-full border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none" onChange={formik.handleChange} />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-white">Username</label>
                        <input type="text" name="taiKhoan" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-full border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none" onChange={formik.handleChange} />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-white">Password</label>
                        <input type="password" name="matKhau" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-full border-coolGray-300 bg-coolGray-50 bg-opacity-10 text-white outline-none" onChange={formik.handleChange} />

                    </div>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-coolGray-300" />
                        <p className="px-3 text-sm text-white">By creating an account, you agree to Conditions of Use and Privacy Notice.</p>
                        <div className="flex-1 h-px sm:w-16 bg-coolGray-300" />
                    </div>
                    <button type="submit" className="block w-full p-3 text-center rounded-full text-white text-xl bg-mainColor bg-opacity-40 hover:bg-opacity-90">REGISTER</button>
                </form>


                <p className="text-xs text-center sm:px-6 text-white">Already have an account?
                    <NavLink to="/login" className="underline text-mainColor ml-2">Sign in</NavLink>
                </p>
            </div>



        </div>
    )
}
