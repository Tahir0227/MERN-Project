import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import Dashboard from '../Component/Dashboard'

function AllCourses() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        setCourses([
            {
                id: 1,
                name: 'IIT-MERN-2025',
                description: 'MERN Stack Development',
                fees: 4000,
                start: '10 Dec 2025',
                end: '5 Jan 2026',
                expire: 7
            },
            {
                id: 3,
                name: 'AI Fundamentals',
                description: 'AI & ML Basics',
                fees: 10000,
                start: '24 Nov 2025',
                end: '24 Dec 2025',
                expire: 5
            },
            {
                id: 6,
                name: 'Android',
                description: 'Android App Development',
                fees: 9999,
                start: '24 Nov 2025',
                end: '24 Dec 2025',
                expire: 7
            }
        ])
    }, [])

    return (
        <>
            <Navbar />
            <Dashboard />

            <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-white to-blue-100 px-6 py-10">

                {/* Page Header */}
                <div className="max-w-7xl mx-auto mb-10 flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        All Courses
                    </h2>

                    <button
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
                            key={course.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg
                         transition flex overflow-hidden"
                        >
                            {/* Left Color Strip */}
                            <div className="w-2 bg-emerald-500"></div>

                            {/* Content */}
                            <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-6 gap-4 items-center">

                                {/* Name */}
                                <div className="md:col-span-2">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {course.name}
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
                                    <p>{course.start}</p>
                                </div>

                                {/* End */}
                                <div>
                                    <p className="text-xs text-gray-500">End</p>
                                    <p>{course.end}</p>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2 justify-end">
                                    <button
                                        className="px-3 py-1.5 text-sm rounded-md
                               bg-yellow-400 hover:bg-yellow-500 text-white"
                                    >
                                        Edit
                                    </button>
                                    <button
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
