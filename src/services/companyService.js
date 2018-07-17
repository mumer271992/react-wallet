import httpService from './httpService';


function fetchCompanies() {
    return new Promise((resolve, reject)=> {
        httpService.get('/company?with=members').then(resp => {
          if (resp) {
            resolve(resp);
          } else {
            reject(resp);
          }
        })
    })
}

const companyService = {
    fetchCompanies: fetchCompanies
}

export default companyService;