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
            return <div className="flex flex-wrap justify-center">
                <button className="glass text-blue-700  rounded-full shadow-lg  m-2 w-10 h-10 flex items-center justify-center" onClick={() => {

                    history.push(`/dashboard/movies/edit-${id}`);

                }}><ion-icon name="pencil"></ion-icon></button>
                <button className="glass text-green-700  rounded-full  m-2 w-10 h-10 flex items-center justify-center" onClick={() => {
                    history.push(`/dashboard/movies/showtime-${id}`);
                    localStorage.setItem('movieParams', JSON.stringify(movieParams));

                }}><ion-icon name="calendar"></ion-icon></button>
                
                <button className="glass text-rose-700   rounded-full  m-2 w-10 h-10 flex items-center justify-center" onClick={() => {
                    if (window.confirm("Are you sure you want to delete this movie?")) {
                        dispatch(deleteMovieAction(id));
                    }
                }}><ion-icon name="trash-bin"></ion-icon></button>
                
            </div>
        }
    }
]