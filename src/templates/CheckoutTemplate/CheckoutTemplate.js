import { Route, Redirect } from "react-router";
import { USER_LOGIN } from "../../util/settings/config";


const CheckoutTemplate = (props) => {


    const { Component, ...restProps } = props;

    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to='/login' />
    }


    return <Route {...restProps} render={propsRoute => {
        return <>

            <Component {...propsRoute} />

        </>
    }} />
}

export default CheckoutTemplate;