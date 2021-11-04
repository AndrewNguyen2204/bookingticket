import React from 'react';
import { Pie } from 'react-chartjs-2';
import { DATA, OPTIONS } from './ChartConfig';


export default function Chart(props) {



    return (
        <>
            <Pie data={DATA} options={OPTIONS} />
        </>
    )
}
