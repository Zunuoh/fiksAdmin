import { React } from 'react';
import { Row, Col } from 'react-bootstrap';
import DashboardLeftPane from './DashboardLeftPane';

const Dashboard = () => {
    return(
        <div>
          
                <Row>
                    <Col sm={2} style={leftPaneColor}>
                        <DashboardLeftPane/>
                    </Col>
                    <Col sm={10} style={rightPaneColor}>sm=4</Col>
                </Row>
          
        </div>
    )
}

const leftPaneColor = {backgroundColor:"#2B613B"}
const rightPaneColor = {backgroundColor:"red"}

export default Dashboard;