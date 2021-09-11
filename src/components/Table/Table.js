import React, { useMemo, useState } from 'react';
import { COLUMNS } from './columns';
import Data from './data';
import { useTable, useSortBy, useGlobalFilter, useAsyncDebounce, usePagination } from 'react-table';
import './Table.css';


export default function Table({ cols, data }) {

    const columns = useMemo(() => cols ? cols : COLUMNS, [cols]);
    const mocData = useMemo(() => data ? data : Data, [data]);

    const tableInstance = useTable({
        columns: columns,
        data: mocData,
    },
        useGlobalFilter, useSortBy, usePagination);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        pageCount,
        gotoPage,
        setPageSize,
        prepareRow,
        state,
        setGlobalFilter
    } = tableInstance;

    const { globalFilter, pageIndex, pageSize } = state;

    const resultFilter = rows.length;

    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <div className="w-full h-[800px] overflow-y-scroll">
                <table {...getTableProps() }>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? 'des' : 'acs') : ''}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))

                        }
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Pagination pages={pageOptions} index={pageIndex} next={nextPage} prev={previousPage} canNext={canNextPage} canPrev={canPreviousPage} count={pageCount} results={resultFilter} gotoPage={gotoPage} size={pageSize} setSize={setPageSize} />
            </div>
        </>
    )
}

function GlobalFilter({ filter, setFilter }) {

    const [value, setValue] = useState(filter);

    const onChange = useAsyncDebounce((value) => {
        setFilter(value || undefined)
    }, 1000);

    const handleChange = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
    }


    return (
        <fieldset className="w-full space-y-1 text-white sm:my-10">
            <label htmlFor="Search" className="hidden">Search</label>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                        <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-white">
                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z" />
                        </svg>
                    </button>
                </span>
                <input type="search" name="Search" placeholder="Search..." className="glass w-32 py-2 pl-10 text-sm rounded-full sm:w-auto focus:outline-none  text-white " value={value || ''} onChange={handleChange} />
            </div>
        </fieldset>

    )
}

function Pagination({ pages, index, next, prev, canNext, canPrev, count, results, gotoPage, size, setSize }) {

    const LIMIT = 1;
    const DEFAULT_PAGE_SIZE = [10, 20, 30, 50];

    const renderTag = () => {

        let firstIndex = 0;
        let lastIndex = pages.length - 1;

        return pages.map(pageIndex => {

            const isActive = pageIndex === index ? "z-10 bg-white border-white border-opacity-40  bg-opacity-25 text-white opacity-90 relative inline-flex items-center px-4 py-2 border text-sm font-medium" : "bg-white bg-opacity-25 opacity-50 hover:opacity-90 relative inline-flex items-center px-4 py-2 border border-opacity-40 text-sm font-medium";

            let tagInner = pageIndex + 1;
            if (index <= firstIndex + LIMIT || index >= lastIndex - LIMIT) {
                if (pageIndex > firstIndex + LIMIT && pageIndex < lastIndex - LIMIT) {
                    if (index < lastIndex - LIMIT) {
                        tagInner = pageIndex === firstIndex + LIMIT + 1 ? '...' : '';
                    } else {
                        tagInner = pageIndex === lastIndex - LIMIT - 1 ? '...' : '';
                    }

                }
            } else {
                if (pageIndex < index - LIMIT || pageIndex > index + LIMIT) {
                    tagInner = (pageIndex === index + LIMIT + 1 || pageIndex === index - LIMIT - 1) ? '...' : '';
                }
            }

            if (tagInner !== pageIndex + 1 && (pageIndex === firstIndex || pageIndex === lastIndex)) {
                tagInner = pageIndex === firstIndex ? '<<' : '>>';
            }

            return tagInner !== '' ? <button key={pageIndex} className={isActive} onClick={() => { gotoPage(pageIndex) }}>{tagInner}</button> : '';

        })



    }

    return (
        <div className="glass px-4 py-3 flex items-center justify-between sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
                <button
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    onClick={() => prev()} disabled={!canPrev}
                >
                    Previous
                </button>
                <div className="relative inline-block text-left">
                    <div>
                    <select
                            className="inline-flex justify-center w-full rounded-md  shadow-sm px-4 py-2  text-sm font-medium text-white  focus:outline-none bg-white bg-opacity-25"
                            value={size}
                            onChange={(e) => setSize(Number(e.target.value))}
                        >
                            {DEFAULT_PAGE_SIZE.map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    onClick={() => next()} disabled={!canNext}
                >
                    Next
                </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-white">
                        Showing <span className="font-medium">{index + 1}</span> to <span className="font-medium">{count}</span> of{' '}
                        <span className="font-medium">{results}</span> results
                    </p>
                </div>



                <div className="relative inline-block text-left">
                    <div >
                        <select
                            className="inline-flex justify-center w-full rounded-md  shadow-sm px-4 py-2  text-sm font-medium text-white  focus:outline-none bg-white bg-opacity-25"
                            value={size}
                            onChange={(e) => setSize(Number(e.target.value))}
                        >
                            {DEFAULT_PAGE_SIZE.map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>




                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white bg-opacity-25 text-sm font-medium text-white opacity-50 hover:opacity-90"
                            onClick={() => prev()} disabled={!canPrev}
                        >
                            <span className="sr-only">Previous</span>
                            <span className="h-5 w-5">{'<'}</span>
                        </button>

                        {/*Render Pagination Tag  */}

                        {renderTag()}

                        <button
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white bg-opacity-25 text-sm font-medium text-white opacity-50 hover:opacity-90"
                            onClick={() => next()} disabled={!canNext}
                        >
                            <span className="sr-only">Next</span>
                            <span className="h-5 w-5">{'>'}</span>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}