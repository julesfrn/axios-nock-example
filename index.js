import axios from 'axios'
import nock from 'nock'
import chai from 'chai'
const { expect } = chai

// axios instance creation
const api = axios.create({
  baseURL: 'http://anyurl',
  timeout: 20000,
})

// nock creation
const response = { foo: 'bar' }
nock(/^.*$/).get('/v1/foo').reply(200, response)

// api call
api.get('/v1/foo').then(res => {
  console.log(response)
  console.log(res.data)
})
