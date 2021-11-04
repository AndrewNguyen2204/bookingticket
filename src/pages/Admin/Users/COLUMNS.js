import { history } from "../../../App";
import { useDispatch } from 'react-redux';
import { deleteUserAction } from "../../../redux/actions/UserAction";
export const COLUMNS = [


    {
        Header: 'Account',
        accessor: 'taiKhoan',
        Cell: ({ value }) => {

            return value.length > 10 ? value.substr(0, 10) + '...' : value;
        }
    },
    {
        Header: 'Name',
        accessor: 'hoTen',
        
    },
    {
        Header: 'Email',
        accessor: 'email',
        Cell: ({ value }) => {

            return value.length > 10 ? value.substr(0, 10) + '...' : value;
        }
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

                <button className="glass text-blue-500 rounded-full shadow-lg mx-2 w-12 h-12 flex items-center justify-center" onClick={() => {

                    history.push(`/dashboard/users/edit/${account}`);

                }}><ion-icon name="create-outline"></ion-icon></button>
                <button className="glass text-rose-500   rounded-full  mx-2 w-12 h-12 flex items-center justify-center" onClick={() => {
                    if (window.confirm("Are you sure you want to delete this user?")) {
                        dispatch(deleteUserAction(account));
                    }
                }}><ion-icon name="trash-outline"></ion-icon></button>



            </div>
        }
    }
]