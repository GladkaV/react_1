import axois from "axios";

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
}

let axiosInstance = axois.create(config);

const getAxioPosts = () => {
    return axiosInstance.get('');
}

export {getAxioPosts};