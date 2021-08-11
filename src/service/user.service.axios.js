import axois from 'axios';

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/users',
}

let axiosInstance = axois.create(config);

const getAxiosUsers = () => {
    return axiosInstance.get('');
}
 export {getAxiosUsers};