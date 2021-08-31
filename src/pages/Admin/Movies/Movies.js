import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { history } from '../../../App';
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


    return (
        <div className="movie-manager bg-black bg-opacity-25 w-full h-screen flex flex-col  justify-center items-center">
            {/*Breadcrumb  */}
            <nav aria-label="breadcrumb" className="w-full h-1/8 p-4 bg-coolGray-100 text-coolGray-800">
                <ol className="flex h-8 space-x-2">
                    <li className="flex items-center">
                        <NavLink to="/home" title="Back to homepage" className="hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 pr-1 text-coolGray-600">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </NavLink>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" className="w-2.5 h-2.5 mt-0.5 transform rotate-90 fill-current text-coolGray-400">
                            <path d="M32 30.031h-32l16-28.061z" />
                        </svg>
                        <a href="#" className="flex items-center px-1 capitalize hover:underline">Parent</a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" className="w-2.5 h-2.5 mt-0.5 transform rotate-90 fill-current text-coolGray-400">
                            <path d="M32 30.031h-32l16-28.061z" />
                        </svg>
                        <a href="#" className="flex items-center px-1 capitalize hover:underline">Parent</a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" className="w-2.5 h-2.5 mt-0.5 transform rotate-90 fill-current text-coolGray-400">
                            <path d="M32 30.031h-32l16-28.061z" />
                        </svg>
                        <a href="#" className="flex items-center px-1 capitalize hover:underline hover:no-underline cursor-default">Current</a>
                    </li>{/**/}
                </ol>
            </nav>

            <div className="w-full h-full bg-black bg-opacity-25 p-8">

                <h1 className="text-4xl font-bold mb-8 text-purple-500">MOVIE MANAGEMENT</h1>
                <button className="px-4 py-2 bg-purple-500 rounded-lg" onClick={() => {
                    history.push("/dashboard/movies/add");
                }}>Add +</button>
                <div className="w-full h-full">
                    <Table data={defaultMovies} cols={COLUMNS} />
                </div>
            </div>
        </div>
    )
}
