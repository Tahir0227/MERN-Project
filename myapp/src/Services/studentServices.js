import axios from "axios";
import config from "./Config";

export async function getCourseInfo(Course_id) {
    const url = `${config.BASE_URL}/courses/getInfo/${Course_id}`
    const response = await axios.get(url)
    return response.data
}

export async function registerToCourse(name, email, course_id, mobile_no) {
    const url = config.BASE_URL + '/student/register-to-course'
    const body = { name, email, course_id, mobile_no }

    const response = await axios.post(url, body)
    return response.data
}

export async function getMyCourses(token) {
    const url = config.BASE_URL + '/student/my-courses'
    const headers = { token }

    const response = await axios.get(url, { headers })
    return response.data
}

export async function getCourseWithVideos(Course_id, token) {
    const url = `${config.BASE_URL}/student/my-course-with-videos/${Course_id}`
    const headers = { token }

    const response = await axios.get(url, { headers })
    return response.data
}

export async function getVideo(video_id, token) {
    const url = `${config.BASE_URL}/student/my-course/video/${video_id}`
    const headers = { token }

    const response = await axios.get(url, { headers })
    return response.data
}