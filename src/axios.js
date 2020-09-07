// in HTTP.js
import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'


// create a new axios instance
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

// before a request is made start the nprogress
instance.interceptors.request.use(config => {
  nprogress.start()
  return config
})

// before a response is returned stop nprogress
instance.interceptors.response.use(response => {
  nprogress.done()
  return response
})

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default instance