import axios from 'axios';

const axiosGet = axios.create({
    baseURL: 'https://www.reddit.com/r/'
});

export default axiosGet;