import React from 'react';
import './Diagram.css';
import FlowChart from '../../images/FlowComplaint.png'

const Diagram = () => {
    return (
        <div className="contaier-img">
            <img className="flowchart" src={FlowChart} alt="flowchart"/>
        </div>
    )
}

export default Diagram