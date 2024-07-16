import { Response } from "../utils/HttpResponse.interface";
import api from "./config";
interface Auth{
    token:string;
}
const authService = {
    login: async (credentials:{email:string,password:string}) => {
        const response = await api.post<Response<Auth>>("/auth/login",credentials);
        return response.data;
    }
}

export default authService;