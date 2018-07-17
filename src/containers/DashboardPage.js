import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { fetchCompanies } from '../actions/company';

import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import CompanyMembersPage from './CompanyMembersPage';

export class DashboardPage extends React.Component{
	constructor(props) {
		super(props);
	}

  componentWillMount() {
    this.props.fetchCompaniesList();
  }

	render() {
    const { companies, match } = this.props;
    console.log('companies');
    console.log(companies);

		return (
      <div>
			  <Header />
        <div className="container">
          <Dashboard companies={companies} />
        </div>
		  </div>
    );
	}
}

const mapDispatchToProps = (dispatch) => ({
  fetchCompaniesList: () => dispatch(fetchCompanies())
})

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    companies: state.company.companies
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);

