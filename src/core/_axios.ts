import axios from 'axios';

const baseUrl = axios.create({
    baseURL: 'https://uniplato.staging.uniplato.us'
})

export default baseUrl;