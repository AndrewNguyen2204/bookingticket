export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Phone',
        accessor: 'phone'
    },
    {
        Header: 'Action',
        Cell: () => {
            return <>
                <button className="bg-green-500 text-white rounded-md mx-2 px-4 py-1">Edit</button>
                <button className="bg-rose-500 text-white rounded-md  mx-2 px-4 py-1">Delete</button>
            </>
        }
    }

]