import httpService from '../services/httpService';
import authService from '../services/authService';
import companyService from '../services/companyService';

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

export const fetchCompanies = () => {
  return (dispatch) => {
    return companyService.fetchCompanies().then((resp) => {
      if(resp && resp.data) {
        dispatch(storeCompanies(resp.data));
      }
    })
  }
}

export const storeCompanies = (companies) => ({
  type: 'STORE_COMPANIES',
  companies
})

export const setCompany = (company) => ({
	type: 'SET_COMPANY',
	company
})