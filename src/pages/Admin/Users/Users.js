import React, { useEffect } from 'react';
import Table from '../../../components/Table/Table';
import { history } from '../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction } from '../../../redux/actions/UserAction';
import { COLUMNS } from './COLUMNS';
import Breadcrumb from '../../../components/Breadcrumd/Breadcrumb';
import { Button } from '../../../components/Button/Button';

export default function Users(props) {


    const { users } = useSelector(state => state.UserReducer);



    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersAction());
    }, [dispatch]);

    const { location: { pathname } } = props;

    return (
        <div className="user-manager bg-black bg-opacity-25 w-full min-h-screen flex flex-col  justify-center items-center">
           
           
            <Breadcrumb pathname={pathname} />

           
            <div className="w-[90%] glass py-10 px-5 rounded-[30px] mt-10">
                <div className="mb-10">
                    <span className="uppercase text-orange-500 p-4 text-4xl font-bold opacity-90">user management</span>
                </div>
                <Button buttonStyle="btn--outline" onClick={() => {
                    history.push("/dashboard/users/add");
                }}><span>Add +</span></Button>
                <div className="w-full h-full text-xs">
                    <Table data={users} cols={COLUMNS} />
                </div>
            </div>
        </div>
    )
}
