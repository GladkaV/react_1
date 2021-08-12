import axois from 'axios';

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com',
}

let axiosInstance = axois.create(config);

const getAxiosUsers = () => {
    return axiosInstance.get('/users');
}
 export {getAxiosUsers, config};