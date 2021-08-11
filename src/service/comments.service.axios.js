import axios from "axios";

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/comments',
}

let axiosInstance = axios.create(config);

const getAxioComments = () => {
    return axiosInstance.get('');
}

export {getAxioComments};