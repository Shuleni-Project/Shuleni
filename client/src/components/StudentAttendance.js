import React from "react";
import {Pie} from 'react-chartjs-2';

export default function StudentAttendance({chartData}) {
    return (
        <Pie data={chartData}/>
    );
}
