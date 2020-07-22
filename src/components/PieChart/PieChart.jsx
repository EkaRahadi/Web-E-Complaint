import React from 'react';
import {Pie} from 'react-chartjs-2';
import './PieChart.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PieChart = (props) => {


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