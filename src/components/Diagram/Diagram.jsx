import React from 'react';
import './Diagram.css';
import FlowChart from '../../images/FlowComplaint.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Diagram = () => {
    return (
        <Container>
            <Row className="center-row">
                <Col lg={6}>
                    <img className="flowchart" src={FlowChart} alt="flowchart"/>
                </Col>
            </Row>
        </Container>
    );
}

export default Diagram