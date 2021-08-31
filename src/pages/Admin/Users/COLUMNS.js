import { history } from "../../../App";
import { useDispatch } from 'react-redux';
import { deleteMovieAction } from "../../../redux/actions/MovieAction";
import { deleteUserAction } from "../../../redux/actions/UserAction";
export const COLUMNS = [


    {
        Header: 'Account',
        accessor: 'taiKhoan'
    },
    {
        Header: 'Name',
        accessor: 'hoTen'
    },
    {
        Header: 'Email',
        accessor: 'email'
    },
    {
        Header: 'Phone',
        accessor: 'soDt'
    },
    {
        Header: 'Type',
        accessor: 'maLoaiNguoiDung'
    },

    {
        Header: 'Action',
        Cell: ({ row }) => {
            // Get account from column Account (first cell of this row)

            let account = row.cells[0]?.value;



            const dispatch = useDispatch();
            return <div className="flex justify-around items-center">
                <button className="bg-blue-500 text-white rounded-md mx-2 px-4 py-1 flex-shrink-1" onClick={() => {

                    history.push(`/dashboard/users/edit/${account}`);

                }}>Edit</button>
                <button className="bg-rose-500 text-white rounded-md  mx-2 px-4 py-1 flex-shrink-1" onClick={() => {
                    if (window.confirm("Are you sure you want to delete this user?")) {
                        dispatch(deleteUserAction(account));
                    }
                }}>Delete</button>

            </div>
        }
    }
]