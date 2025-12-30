import React, { useEffect, useState } from 'react'
import AdminNavbar from './../Component/AdminNavbar';
import { getAllActiveCourses } from '../Services/userServices'
import { useNavigate } from 'react-router'
import Dashboard from '../Component/Dashboard'

function Home() {

    const navigate = useNavigate()
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getCourses()
    }, [])

    const getCourses = async () => {
        const result = await getAllActiveCourses()
        if (result.status === "success") {
            setCourses(result.data)
        }
    }

    return (
        <>
            <AdminNavbar />
            <Dashboard />

            {/* MAIN CONTENT (shifted right because of sidebar) */}
            <div className="ml-64 min-h-screen bg-gradient-to-br from-emerald-100 via-white to-blue-100 px-6 py-10">

                {/* ================= Admin Welcome ================= */}
                <div className="max-w-7xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Admin Dashboard
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Manage courses, students, and content from one place.
                    </p>
                </div>



                {/* ================= Courses ================= */}
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12">
                        Active Courses
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {courses.map(course => (
                            <div
                                key={course.Course_id}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
                            >

                                {/* Course Image */}
                                <div className="relative">
                                    <img
                                        src="https://via.placeholder.com/400x200"
                                        alt="course"
                                        className="w-full h-44 object-cover"
                                    />

                                    <span className="absolute top-3 left-3 bg-emerald-500 text-white
                                   text-xs font-semibold px-3 py-1 rounded-full">
                                        Active
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col">

                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                        {course.course_name}
                                    </h3>

                                    <div className="flex items-center text-sm text-gray-600 gap-2 mb-6">
                                        <span>📅</span>
                                        <span>
                                            Starts on{" "}
                                            {new Date(course.start_date).toLocaleDateString("en-GB", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </span>
                                    </div>

                                    <button
                                        className="w-full border border-emerald-500 text-emerald-600
                               font-semibold py-2 rounded-lg
                               hover:bg-emerald-50 transition"
                                        onClick={() => navigate(`/course-info/${course.Course_id}`)}
                                    >
                                        View More →
                                    </button>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </>
    )
}

export default Home