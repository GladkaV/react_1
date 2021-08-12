import axios from "axios";
import {config} from "./user.service.axios";

let axiosInstance = axios.create(config);

const getAxioComments = () => {
    return axiosInstance.get('/comments');
}

export {getAxioComments};