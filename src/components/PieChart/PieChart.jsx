import React, {useState} from 'react';
import {Pie} from 'react-chartjs-2';
import './PieChart.css';

const PieChart = (props) => {

    const [data, setData] = useState({
        labels: ['Sarana Prasarana', 'Akademik', 'Keuangan', 'Tenaga Pengajar'],
        datasets: [
            {
                label: 'Sebaran Keluhan',
                data: [
                    300,
                    500,
                    200,
                    700
                ],
                backgroundColor: [
                    'rgb(255,61,103)',
                    'rgb(54,162,235)',
                    'rgb(255,205,86)',
                    'rgb(75,192,192)',
                ],
            }
        ]
    })


    return (
        <div className="chart">
            <Pie data={props.dataChart}/>
        </div>
    );
}

export default PieChart;