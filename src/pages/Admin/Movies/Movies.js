import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../App';
import Breadcrumb from '../../../components/Breadcrumd/Breadcrumb';
import { Button } from '../../../components/Button/Button';
import Table from '../../../components/Table/Table';
import { getMoviesAction } from '../../../redux/actions/MovieAction';
import { COLUMNS } from './COLUMNS';
import './Movies.css';

export default function Movies(props) {


    const { defaultMovies } = useSelector(state => state.MovieReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesAction());
    }, []);


    const { location: { pathname } } = props;

    return (
        <div className="movie-manager bg-black bg-opacity-25 w-full min-h-screen flex flex-col  justify-center items-center">


            <Breadcrumb pathname={pathname} />


            <div className="w-[90%] glass py-10 px-5 rounded-[30px] mt-10">
                <div className="mb-10">
                    <span className="uppercase text-orange-500 p-4 text-4xl font-bold opacity-90">movie management</span>
                </div>



                <Button buttonStyle="btn--outline" onClick={() => {
                    history.push("/dashboard/movies/add");
                }}><span>Add +</span></Button>
                <div className="w-full h-full">
                    <Table data={defaultMovies} cols={COLUMNS} />
                </div>
            </div>
        </div>
    )
}
