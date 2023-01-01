import { React } from 'react';
import { Row, Col } from 'react-bootstrap';
import DashboardLeftPane from './DashboardLeftPane';
import DashboardRightPane from './DashboardRightPane';

const Dashboard = () => {
    return(
        <div>
          
                <Row>
                    <Col sm={2} style={leftPaneColor}>
                        <DashboardLeftPane/>
                    </Col>
                    <Col sm={10} style={rightPaneColor}>
                        <DashboardRightPane/>
                        
                    </Col>
                </Row>
          
        </div>
    )
}

const leftPaneColor = {backgroundColor:"#2B613B"}
const rightPaneColor = {backgroundColor:""}

export default Dashboard;