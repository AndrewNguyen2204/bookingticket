import { Route } from "react-router";
import Header from "./Layout/Header/Header";

export const HomeTemPlate = (props) => {


    const { Component, ...restProps } = props;


    return <Route {...restProps} render={propsRoute => {
        return <>
            <Header {...propsRoute}/>
            <Component {...propsRoute} />
            <footer>Footer</footer>
        </>
    }} />
}