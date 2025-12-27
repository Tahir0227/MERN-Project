import axios from "axios";
import config from "./Config";

export async function loginUser(email, password) {
    const url = config.BASE_URL + '/auth/login'
    const body = { email, password }

    const response = await axios.post(url, body)
    return response.data
}



