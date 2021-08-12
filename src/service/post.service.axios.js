import axois from "axios";
import {config} from "./user.service.axios";

let axiosInstance = axois.create(config);

const getAxioPosts = () => {
    return axiosInstance.get('/posts');
}

export {getAxioPosts};