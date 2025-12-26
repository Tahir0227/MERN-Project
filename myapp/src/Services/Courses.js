import axios from "axios";
import config from "./Config";

export async function getAllActiveCourses() {
    const url = config.BASE_URL + '/courses/all-active-courses'
    const response = await axios.get(url)
    return response.data
}