import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import { getAllActiveCourses } from '../Services/Courses'

function Home() {

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
                                key={course.id}
                                className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
                            >
                                <div className="absolute right-0 top-0 h-full w-32 bg-emerald-50 rounded-l-full"></div>

                                <div className="relative p-6 flex flex-col h-full">

                                    {/* Course Icon */}
                                    <div className="text-5xl mb-4">📘</div>

                                    {/* Course Name */}
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {course.course_name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                                        {course.description}
                                    </p>

                                    {/* Fees */}
                                    <p className="text-sm text-gray-700 mt-2">
                                        Fees: <span className="font-semibold">₹ {course.fees}</span>
                                    </p>

                                    {/* Dates */}
                                    <p className="text-sm text-gray-600">
                                        Start: {course.start_date}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        End: {course.end_date}
                                    </p>

                                    {/* Button */}
                                    <div className="mt-auto pt-6">
                                        <button
                                            className="px-4 py-2 rounded-lg bg-emerald-500 text-white
                                 font-semibold text-sm hover:bg-emerald-600 transition"
                                        >
                                            View More →
                                        </button>
                                    </div>
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
