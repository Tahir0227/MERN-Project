import React, { useEffect, useState } from 'react'
import AdminNavbar from './../Component/AdminNavbar'
import Dashboard from '../Component/Dashboard'
import { useNavigate } from 'react-router'
import { getAllCourses, getAllVideos, deleteVideoById } from '../Services/adminServices'
import { toast } from 'react-toastify'

function AllVideos() {

    const navigate = useNavigate()
    const [selectedCourse, setSelectedCourse] = useState('All')
    const [videos, setVideos] = useState([])
    const [courses, setCourses] = useState([])

    const filteredVideos =
        selectedCourse === 'All'
            ? videos
            : videos.filter(v => v.course_id === Number(selectedCourse))

    useEffect(() => {
        loadVideos()
        loadCourses()
    }, [])

    const loadVideos = async () => {
        const token = localStorage.getItem('token')
        const result = await getAllVideos(token)
        if (result.status == 'success') {
            setVideos(result.data)
        }
    }

    const loadCourses = async () => {
        const token = localStorage.getItem('token')
        const result = await getAllCourses(token)
        if (result.status == 'success') {
            setCourses(result.data)
        }
    }

    const deleteVideo = async (video_id) => {
        const token = localStorage.getItem('token')
        const result = await deleteVideoById(token, video_id)
        if (result.status == 'success') {
            toast.success("video Deleted Successfully !")
            loadVideos()
        }
        else {
            toast.error("Can not delete this video Now")
        }
    }

    return (
        <>
            <AdminNavbar />
            <Dashboard />

            {/* MAIN CONTENT */}
            <div className="ml-64 min-h-screen bg-gradient-to-br from-emerald-100 via-white to-blue-100 px-6 py-10">

                {/* Header */}
                <div className="max-w-7xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-3 items-center">

                    {/* Course Filter */}
                    <div>
                        <select
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                            className="px-4 py-2 rounded-lg border
                                    focus:ring-2 focus:ring-emerald-400 outline-none"
                        >
                            <option value="All">All Courses</option>

                            {courses.map(course => (
                                <option key={course.Course_id} value={course.Course_id}>
                                    {course.course_name}
                                </option>
                            ))}
                        </select>

                    </div>

                    {/* Title (Centered) */}
                    <h2 className="text-3xl font-bold text-gray-800 text-center">
                        All Videos
                    </h2>

                    {/* Empty for alignment */}
                    <div></div>
                </div>

                {/* Video List */}
                <div className="max-w-7xl mx-auto space-y-4">

                    {filteredVideos.map(video => (
                        <div
                            key={video.video_id}
                            className="bg-white rounded-xl shadow-md
               hover:shadow-lg transition
               flex justify-between items-center p-6"
                        >
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {video.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Course: {video.course_name}
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="text-sm text-gray-500">
                                    Added: {new Date(video.added_at).toLocaleDateString("en-GB")}

                                </p>

                                <div className="flex gap-2 mt-2">
                                    <button
                                        onClick={() => navigate(`/update-video/${video.video_id}`)}
                                        className="px-3 py-1.5 text-sm rounded-md
                                                   bg-yellow-400 hover:bg-yellow-500 text-white"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => deleteVideo(video.video_id)}
                                        className="px-4 py-1.5 text-sm rounded-md
                     bg-red-500 text-white
                     hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </>
    )
}

export default AllVideos
