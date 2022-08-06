import axios from 'axios';
import { BASE_URL } from '../constants/general';

const baseUrl = axios.create({
    baseURL: BASE_URL
})

export default baseUrl;