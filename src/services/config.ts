import axios from "axios";
import { resetAllStores } from "../store/store.config";

const host = import.meta.env.VITE_HOST;
const api = axios.create({
  baseURL: host,
  headers: {
    "Content-Type": "application/json",
}
});

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    if(token){
        config.headers["auth-token"] = token;
    }
    return config;
})
api.interceptors.response.use((response)=>{
    console.log(response)
    return {
        ...response,
        data: {
            error: false,
            data: response.data
        }
    };
},(error)=>{
    const response = error.response;
    if(response?.data?.type == "TOKEN INVALID"){
        localStorage.removeItem("token");
        resetAllStores();
        localStorage.setItem("error","Session expired, please login again");
        window.location.href="/login";   
    }   
    return response;
    // return Promise.reject(data);
});


export default api;
