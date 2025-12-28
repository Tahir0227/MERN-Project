import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
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
            <Navbar />
            <Dashboard />


            <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-white to-blue-100 px-6 py-10">

                {/* ================= Institute Info ================= */}
                <div className="max-w-6xl mx-auto text-center mb-20">
                    <h2 className="text-3xl font-bold text-gray-800">
                        About Our Institute
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We are a professional training institute focused on practical learning,
                        industry-relevant skills, and student success.
                    </p>
                </div>

                {/* ================= Achievements ================= */}
                <div className="max-w-6xl mx-auto mb-24">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-3xl font-bold text-emerald-600">10+</h3>
                            <p className="mt-2 text-gray-600">Years Experience</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-3xl font-bold text-emerald-600">5000+</h3>
                            <p className="mt-2 text-gray-600">Students Trained</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-3xl font-bold text-emerald-600">100+</h3>
                            <p className="mt-2 text-gray-600">Expert Trainers</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-3xl font-bold text-emerald-600">90%</h3>
                            <p className="mt-2 text-gray-600">Placement Success</p>
                        </div>
                    </div>
                </div>

                {/* ================= Courses ================= */}
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                        Our Courses
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

                                    {/* Course Name */}
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                        {course.course_name}
                                    </h3>

                                    {/* Start Date */}
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

                                    {/* View More Button */}
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
