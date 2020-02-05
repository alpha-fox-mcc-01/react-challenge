import axios from 'axios'

const instanceServer = axios.create({
    baseURL: 'http://localhost:3000',
})


export default instanceServer 