import { history } from "../../../App";
import { useDispatch } from 'react-redux';
import { deleteMovieAction } from "../../../redux/actions/MovieAction";
export const COLUMNS = [
    {
        Header: 'ID',
        accessor: 'maPhim'
    },
    {
        Header: 'Name',
        accessor: 'tenPhim'
    },
    {
        Header: 'Poster',
        accessor: 'hinhAnh',
        Cell: ({ value }) => {
            return (
                <>
                    <img className="w-10" src={value} alt="poster" />
                </>
            )
        }
    },
    {
        Header: 'Description',
        accessor: 'moTa',
        Cell: ({ value }) => {

            return value.length > 50 ? value.substr(0, 50) + '...' : value;
        }
    },
    {
        Header: 'Action',
        Cell: ({ row }) => {
            // Get id from column ID (first cell of this row)


            let id = row.cells[0]?.value;

            let movieParams = {
                id: row.cells[0]?.value,
                tenPhim: row.cells[1]?.value,
                hinhAnh: row.cells[2]?.value,
            }

            const dispatch = useDispatch();
            return <div className="flex justify-around items-center">
                <button className="bg-blue-500 text-white rounded-md mx-2 px-4 py-1 flex-shrink-1" onClick={() => {

                    history.push(`/dashboard/movies/edit/${id}`);

                }}>Edit</button>
                <button className="bg-rose-500 text-white rounded-md  mx-2 px-4 py-1 flex-shrink-1" onClick={() => {
                    if (window.confirm("Are you sure you want to delete this movie?")) {
                        dispatch(deleteMovieAction(id));
                    }
                }}>Delete</button>
                <button className="bg-green-500 text-white rounded-md  mx-2 px-4 py-1 flex-shrink-1" onClick={() => {
                    history.push(`/dashboard/movies/showtime/${id}`);
                    localStorage.setItem('movieParams', JSON.stringify(movieParams));

                }}>Showtime</button>
            </div>
        }
    }
]