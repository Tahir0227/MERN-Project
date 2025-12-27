import axios from "axios";
import config from "./Config";

export async function registerToCourse(name, email, course_id, mobile_no) {
    const url = config.BASE_URL + '/student/register-to-course'
    const body = { name, email, course_id, mobile_no }

    const response = await axios.post(url, body)
    return response.data
}