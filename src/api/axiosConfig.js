import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:8888/api/v2',
    baseURL: "https://socialmedia-production-app-64946c721aef.herokuapp.com/api/v2",
    headers: {
        'accept': 'application/json'
    }
});


axiosInstance.interceptors.request.use(
    config => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);



export default axiosInstance;