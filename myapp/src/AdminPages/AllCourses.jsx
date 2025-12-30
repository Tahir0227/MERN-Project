import React, { useEffect, useState } from 'react'
import AdminNavbar from './../Component/AdminNavbar';
import Dashboard from '../Component/Dashboard'
import { getAllCourses, deleteCourseById } from '../Services/adminServices';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

function AllCourses() {
    const navigate = useNavigate()
    const [courses, setCourses] = useState([])

    useEffect(() => {
        loadCourses()
    }, [])

    const loadCourses = async () => {
        const token = localStorage.getItem('token')
        const result = await getAllCourses(token)
        if (result.status == 'success') {
            setCourses(result.data)
        }
    }

    const deleteCourse = async (Course_id) => {
        const token = localStorage.getItem('token')
        const result = await deleteCourseById(token, Course_id)
        if (result.status == 'success') {
            toast.success("Course Deleted Successfully !")
            loadCourses()
        }
        else {
            toast.error("Can not delete this course Now")
        }
    }

    return (
        <>
            <AdminNavbar />
            <Dashboard />

            {/* MAIN CONTENT (shifted right to avoid dashboard overlap) */}
            <div className="ml-64 min-h-screen bg-gradient-to-br from-emerald-100 via-white to-blue-100 px-6 py-10">

                {/* Page Header */}
                <div className="max-w-7xl mx-auto mb-10 flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        All Courses
                    </h2>

                    <button
                        onClick={() => navigate(`/add-course`)}
                        className="bg-emerald-500 text-white px-5 py-2
                                   rounded-lg font-semibold hover:bg-emerald-600 transition"
                    >
                        + Add New Course
                    </button>
                </div>

                {/* Course List */}
                <div className="max-w-7xl mx-auto space-y-5">

                    {courses.map(course => (
                        <div
                            key={course.Course_id}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg
                                       transition flex overflow-hidden"
                        >
                            {/* Left Accent Strip */}
                            <div className="w-2 bg-emerald-500"></div>

                            {/* Content */}
                            <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-6 gap-4 items-center">

                                {/* Name */}
                                <div className="md:col-span-2">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {course.course_name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {course.description}
                                    </p>
                                </div>

                                {/* Fees */}
                                <div>
                                    <p className="text-xs text-gray-500">Fees</p>
                                    <p className="font-semibold">₹{course.fees}</p>
                                </div>

                                {/* Start */}
                                <div>
                                    <p className="text-xs text-gray-500">Start</p>
                                    <p>
                                        {new Date(course.start_date).toLocaleDateString("en-GB")}
                                    </p>

                                </div>

                                {/* End */}
                                <div>
                                    <p className="text-xs text-gray-500">End</p>
                                    <p>
                                        {new Date(course.end_date).toLocaleDateString("en-GB")}
                                    </p>

                                </div>

                                {/* Actions */}
                                <div className="flex gap-2 justify-end">
                                    <button
                                        onClick={() => navigate(`/update-course/${course.Course_id}`)}
                                        className="px-3 py-1.5 text-sm rounded-md
                                                   bg-yellow-400 hover:bg-yellow-500 text-white"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteCourse(course.Course_id)}
                                        className="px-3 py-1.5 text-sm rounded-md
                                                   bg-red-500 hover:bg-red-600 text-white"
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

export default AllCourses
