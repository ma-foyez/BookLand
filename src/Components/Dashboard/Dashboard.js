import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Dashboard.css'
import dashboardData from '../../assets/staticData/dashboard.js'

const Dashboard = () => {
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                {
                    dashboardData.length > 0 && dashboardData.map((item, index) => (
                        <Col md={3} sm={4} xs={6}>
                            <div className="m-2 customeDashboard">
                                <img src={item.image} alt="" className="img-fluid" />
                                <h3 className="dashboardLength">
                                    {item.total}
                                </h3>
                                <p className="dashTitle">
                                    {item.title}
                                </p>
                            </div>
                        </Col>
                    ))
                }
                <Col>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;