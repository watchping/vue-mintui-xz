import axios from "axios"

//axios.defaults.baseURL="http://localhost:5050"
axios.defaults.baseURL="http://172.16.22.50:5050"
axios.defaults.withCredentials = true;  

export {axios}