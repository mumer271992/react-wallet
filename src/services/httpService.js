import axios from 'axios'

let loadingInstance = null
let loadingInstanceCount = 0
let spinnerOptions = {
  show_loading: true,
  fullscreen: true,
  target: 'document.body'
}

axios.interceptors.response.use(function (response) {
  if (response.config.url !== 'https://api.coinmarketcap.com/v1/ticker/ethereum/') {
    loadingInstanceCount = loadingInstanceCount > 0 ? (loadingInstanceCount - 1) : 0
    if (loadingInstance && loadingInstanceCount === 0) {
      loadingInstance.close()
    }
  }
  return response
}, function (error) {
  loadingInstanceCount = loadingInstanceCount > 0 ? (loadingInstanceCount - 1) : 0
  if (loadingInstance && loadingInstanceCount === 0) {
    loadingInstance.close()
  }
  // console.log(this)

  if (error.response && error.response.data && error.response.data.message) {
    // Notification({
    //   type: 'error',
    //   title: 'Error',
    //   message: error.response.data.message
    // })
  }

  return Promise.reject(error)
})

export default {
  api_url: 'http://localhost:8081',

  /*
    params: optional = Key value pair object
  */

  get: function (endpoint, params = undefined, opts = spinnerOptions) {
    let url = this.api_url + endpoint

    // append params at the end of url
    if (opts.show_loading) {
      loadingInstanceCount++
      // loadingInstance = Loading.service(opts)
    }

    let config = this.mergeHeaders()
    if (params) {
      config.params = params
    }

    return axios.get(url, config).then(resp => resp.data)
  },

  post: function (endpoint, data, opts = spinnerOptions) {
    if (opts.show_loading) {
      loadingInstanceCount++
      // loadingInstance = Loading.service(opts)
    }
    let url = this.api_url + endpoint
    let config = this.mergeHeaders()

    return axios.post(url, data, config).then(resp => resp.data)
  },

  put: function (endpoint, data, opts = spinnerOptions) {
    if (opts.show_loading) {
      loadingInstanceCount++
      // loadingInstance = Loading.service(opts)
    }

    let url = this.api_url + endpoint
    let config = this.mergeHeaders()

    return axios.put(url, data, config).then(resp => resp.data)
  },

  delete: function (endpoint, opts = spinnerOptions) {
    if (opts.show_loading) {
      loadingInstanceCount++
      // loadingInstance = Loading.service(opts)
    }

    let url = this.api_url + endpoint
    let config = this.mergeHeaders()

    return axios.delete(url, config).then(resp => resp.data)
  },

  mergeHeaders: function () {
    let token = localStorage.getItem('access_token'); //store.getters.token
    let config = {}
    config.headers = {
      'Content-Type': 'application/json'
    }
    if (token) {
      config.headers.Authorization = `Basic ${token}`
    }
    return config
  }
}
