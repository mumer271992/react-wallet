import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';


export class CompanyMembersPage extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Company Member Page</h1>
      </div>
    );
  }
}

export default connect(undefined, undefined)(CompanyMembersPage);

