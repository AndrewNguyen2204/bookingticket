import { Route } from 'react-router-dom';
import './UserTemplate.css';






const UserTemplate = (props) => {


    const { Component, ...restProps } = props;




    return <Route {...restProps} render={propsRoute => {
        return <section className="userTemplate w-full h-screen">

            <Component {...propsRoute} />

        </section>
    }} />
}

export default UserTemplate;