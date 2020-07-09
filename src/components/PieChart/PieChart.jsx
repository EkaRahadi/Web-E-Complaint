import React, {useState} from 'react';
import {Pie} from 'react-chartjs-2';
import './PieChart.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <Container>
            <Row className="center-row">
                <Col lg={10} md={12}>
                    <Pie data={props.dataChart}/>
                </Col>
            </Row>
        </Container>
    );
}

export default PieChart;