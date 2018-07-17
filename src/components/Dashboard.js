import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Row, Col } from 'antd';

export class Dashboard extends React.Component{
  constructor(props) {
      super(props);
  }

  render() {
    const { companies } = this.props;
    console.log(companies);
    return (
      <div>
        <Row>
        {
          companies.map((company, index) => (
            <Col xs={12} sm={3} md={6} key={index}>
              <NavLink to={`/dashboard/company/${company._id}/members`}>
                <Card style={{ width: 300 }}>
                  <h2>{company.name}</h2>
                </Card>
              </NavLink>
            </Col>
          ))
        }
        </Row>
      </div>
    );
  }
}



export default Dashboard;

