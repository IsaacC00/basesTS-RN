import axios from "axios"
import { ListUserResponse } from "../interfaces/reqres.response"

export const loadUserAction = async(page:number) => {
    try {
        const { data } = await axios.get<ListUserResponse>(`https://reqres.in/api/users?page=${page}`);
        
        return data.data;

    } catch (error) {
        console.log(error);
        return [];
    }
}
