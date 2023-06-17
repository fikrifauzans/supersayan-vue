import axios from 'axios'
import Error from './error'
import System from '../System/index.js'
import H_Language from '../Lang/index'
import Handler from '../Handler/index'


// INIT
// console.log("env", process.env)
const system = new System()
const api = axios.create(
  {
    // baseURL: process.env.API_BASE_URL ?? 'https://api.beytcoffeetigabelas.com' ,
    baseURL: system.apiRoot(),
    timeout: system.apiTimeout(),
    transitional: {
      silentJSONParsing: true
    },
    // responseType: "json"
  })

class Api {

  // CONSTRUCT API
  constructor() {
    this.api = api
    this.apiVersion = 'api/v1/'
    this.Lang = new H_Language()
    this.Handle = new Handler()

  }
  setAuthToken() {
    let token = this.Handle.getLS('_token')
    this.api.defaults.headers.common = { 'Authorization': `Bearer ${token}` }

  }
  setDefaultHeader() {
    this.api.defaults.headers = { 'Accept': "application/json" }
    return this
  }
  setMultipartForm() {
    this.api.defaults.headers = { 'Content-Type': 'multipart/form-data' }
    return this
  }

  async get(endpoint, callback, error, firstSegment = null, responseType = 'json') {
    return await this.R_validate('get', endpoint, null, callback, error, responseType, firstSegment)
  }
  delete(endpoint, callback, error, firstSegment = null, responseType = 'json') {
    return this.R_validate('delete', endpoint, null, callback, error, responseType, firstSegment)
  }
  put(endpoint, payload, callback, error, firstSegment = null, responseType = 'json') {
    return this.R_validate('put', endpoint, payload, callback, error, responseType, firstSegment)
  }
  post(endpoint, payload, callback, error, firstSegment = null, responseType = 'json') {
    return this.R_validate('post', endpoint, payload, callback, error, responseType, firstSegment)
  }

  async R_validate(method, endpoint, payload, callback, error, responseType, firstSegment) {


    // IF FIRSTSEGMENT = null
    let url = ''
    if (firstSegment == null) url = this.apiVersion + this.Lang.getLang().toLowerCase() + '/' + endpoint
    else url = endpoint

    this.setDefaultHeader()
    this.setAuthToken()
    // GET METHOD

    if (method == 'get') {
      await this.api({ method, url, responseType }).then(
        (response) => {
          let [data, status, message, raw_response] = [response.data.data, response.status, response.data.message, response]

          callback(data, status, message, raw_response)
        }
      ).catch((e) => {
        if (e && e.response) {
          const [errorMessage, errorStatus, errorHeaders] = [e.response.data, e.response.status, e.response.headers]
          // # Error Message 
          this.errorMessage(e.response.status, e)
          // # Response Default 
          if (errorStatus == 401) {
            error(e.response) // Masuk ke callback
          }
        }
      })
    }
    //DELETE
    if (method == 'delete') {
      await this.api({ method, url, responseType }).then(
        (response) => {
          const [data, status, message, raw_response] = [response.data.data, response.status, response.data.message, response]
          callback(data, status, message, raw_response)
        }
      ).catch((e) => {
        // # Error Message 
        this.errorMessage(e.response.status, e)
        // # Response Default 
        if (e && e.response) {
          const [errorMessage, errorStatus, errorHeaders] = [e.response.data, e.response.status, e.response.headers]
          error(errorMessage, errorStatus, errorHeaders)
        }
      })
    }
    // PUT
    if (method == 'put') {
      await this.api({ method, url, data: payload, responseType }).then(
        (response) => {
          const [data, status, message, raw_response] = [response.data.data, response.status, response.data.message, response]
          callback(data, status, message, raw_response)

        }
      ).catch((e) => {
        // #error Message 
        this.errorMessage(e.response.status, e)

        if (e && e.response) {
          const [errorMessage, errorStatus, errorHeaders] = [e.response.data, e.response.status, e.response.headers]
          error(errorMessage, errorStatus, errorHeaders)
        }

      })
    }
    if (method == 'post') {
      await this.api({ method, url, data: payload, responseType }).then(
        (response) => {
          const [data, status, message, raw_response] = [response.data.data, response.status, response.data.message, response]
          callback(data, status, message, raw_response)
        }
      ).catch((e) => {

        this.errorMessage(e.response.status, e)
        // if (e.code === 'ECONNABORTED') {
        //   return console.log('waktu Habis');
        // };
        // if (e.response.status == 422) {
        //   // Kalo Validasi salah 
        // }
        // if (e.response.status == 403) {
        //   // Kalo Permission Denied
        //   const u = '/403';
        //   window.location = u
        // }

        const [data, status, message, raw_response] = [response.data.data, response.status, response.data.message, response]
        callback(data, status, message, raw_response)

      })
    }

  }


}


// SAME LIKE {...Token}
Object.assign(Api.prototype, Error)

export default Api


