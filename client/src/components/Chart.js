import React from "react";
import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

export default function Chart({chartData}) {
    return (
        <Pie data={chartData}/>
    );
}
