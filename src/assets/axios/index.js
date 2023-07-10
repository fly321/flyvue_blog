import {useStore} from "@/assets/pinia";
import axios from 'axios';

const ax1 = axios.create({
    baseURL: 'http://localhost:62030/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
})

ax1.interceptors.request.use(function (config) {
    console.log(useStore().token)
    if (localStorage.getItem('token')) {
        config.headers.Authorization = localStorage.getItem('token');
    }
})

const axiosPlugin = {
    install(app) {
        // Set properties or perform any necessary setup
        app.config.globalProperties.$axios = ax1;
    },
};

export default axiosPlugin;