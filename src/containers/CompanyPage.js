import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { fetchCompanies } from '../actions/company';

import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import CompanyMembersPage from './CompanyMembersPage';
import CompanyEditPage from './CompanyEditPage';
import CompanyLicensePage from './CompanyLicensePage';

export class CompanyPage extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		const { match } = this.props;
		const path = `${match.path}/members`;
		console.log(path);
		console.log(`${match.url}/members`);
		return (
      <div>
      	<Header />
      	<div className="container">
			  	<h1>Company Page</h1>
			  	<NavLink to={`${match.url}/edit`} exact >Edit</NavLink>
			  	<NavLink to={`${match.url}/license`} exact >License</NavLink>
			  	<NavLink to={`${match.url}/members`} exact >Members</NavLink>
			  </div>
			 	<div>
			 		<Route path={`${match.path}/members`} component={CompanyMembersPage} />
			 		<Route path={`${match.path}/license`} component={CompanyLicensePage} />
			 		<Route path={`${match.path}/edit`} component={CompanyEditPage} />
			 	</div>
		  </div>
    );
	}
}

export default connect(undefined, undefined)(CompanyPage);

