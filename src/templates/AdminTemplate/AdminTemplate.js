import { Route, Redirect } from "react-router";
import { USER_LOGIN } from "../../util/settings/config";
import './AdminTemplate.css';
import SideBar from "./SideBar/SideBar";

const AdminTemplate = (props) => {


    const { Component, ...restProps } = props;

    if (!localStorage.getItem(USER_LOGIN)) {
        alert('You do not have permission to access');
        return <Redirect to='/home' />
    }
    
    const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));

    
    if (userLogin.maLoaiNguoiDung !== 'QuanTri') {
        alert('You do not have permission to access');
        return <Redirect to='/home' />
    }



    return <Route {...restProps} render={propsRoute => {
        return (
            <div className='admin w-full min-h-screen flex text-white '>

                <SideBar/>

                <Component {...propsRoute} />

            </div>
        )
    }} />
}

export default AdminTemplate;