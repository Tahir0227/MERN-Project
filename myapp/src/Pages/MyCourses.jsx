import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import { useNavigate } from 'react-router'
// later you can replace this with getMyCourses()
import { getAllActiveCourses } from '../Services/userServices'

function MyCourses() {
    const navigate = useNavigate()
    const [courses, setCourses] = useState([])

    useEffect(() => {
        loadCourses()
    }, [])

    const loadCourses = async () => {
        const result = await getAllActiveCourses() // temporary
        if (result.status === 'success') {
            setCourses(result.data)
        }
    }

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-white to-blue-100 px-6 py-10">

                {/* Title */}
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">
                        My Courses
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Courses you are enrolled in
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {courses.map(course => (
                        <div
                            key={course.Course_id}
                            className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
                        >
                            {/* Right Curve */}
                            <div className="absolute right-0 top-0 h-full w-32 bg-emerald-50 rounded-l-full"></div>

                            {/* Content */}
                            <div className="relative p-6 flex flex-col">

                                {/* Course Icon */}
                                <div className="text-5xl mb-4">📘</div>

                                {/* Course Name */}
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {course.course_name}
                                </h3>

                                {/* Start Date */}
                                <p className="text-sm text-gray-600 mt-2">
                                    Start:{' '}
                                    {new Date(course.start_date).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: 'short',
                                        year: 'numeric',
                                    })}
                                </p>

                                {/* Button */}
                                <div className="mt-auto pt-6">
                                    <button
                                        className="px-4 py-2 rounded-lg bg-emerald-500 text-white
                               font-semibold text-sm hover:bg-emerald-600 transition"
                                        onClick={() =>
                                            navigate(`/course-info/${course.Course_id}`)
                                        }
                                    >
                                        View More →
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

export default MyCourses
