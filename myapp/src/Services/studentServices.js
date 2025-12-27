import axios from "axios";
import config from "./Config";

export async function registerToCourse(name, email, course_id, mobile_no) {
    const url = config.BASE_URL + '/student/register-to-course'
    const body = { name, email, course_id, mobile_no }

    const response = await axios.post(url, body)
    return response.data
}

export async function getCourseInfo(Course_id) {
    const url = `${config.BASE_URL}/courses/getInfo/${Course_id}`
    const response = await axios.get(url)
    return response.data
}
