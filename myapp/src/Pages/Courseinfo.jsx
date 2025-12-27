import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import { Link, useNavigate } from 'react-router'
import { getCourseInfo } from '../Services/studentServices'
import { useParams } from 'react-router'

function Courseinfo() {

    const navigate = useNavigate()
    const { id } = useParams()
    const [course, setCourse] = useState([])

    useEffect(() => {
        console.log("Course info component loaded")
        getCourse()
    }, [])

    const getCourse = async () => {
        const result = await getCourseInfo(id)
        console.log(result)
        if (result.status == "success") {
            setCourse(result.data[0])
        }
    }


    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-white to-blue-100 px-6 py-12">

                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        {/* LEFT: Course Image / Tech */}
                        <div className="flex justify-center">
                            <div className="bg-gray-50 rounded-xl shadow-md p-6 w-full flex justify-center">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png"
                                    alt="MERN Stack"
                                    className="max-h-48 object-contain"
                                />
                            </div>
                        </div>

                        {/* RIGHT: Course Info */}
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                {course.course_name}
                            </h1>

                            <p className="text-gray-600 mb-6">
                                {course.description}
                            </p>

                            <div className="space-y-3 text-gray-700">
                                <p className="text-sm text-gray-600">
                                    <span className="font-semibold">Start:</span>
                                    {new Date(course.start_date).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric"
                                    })}

                                </p>
                                <p className="text-sm text-gray-600">
                                    <span className="font-semibold">End:</span>
                                    {new Date(course.end_date).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric"
                                    })}

                                </p>
                                <p>
                                    <span className="font-semibold">Video Expire Days:</span> {course.video_expire_days}
                                </p>
                                <p>
                                    <span className="font-semibold">Fees:</span> {course.fees}
                                </p>
                            </div>

                            {/* Button */}
                            <div className="mt-8">
                                <button
                                    onClick={() => navigate(`/registerCourse/${course.Course_id}`)}
                                    className="px-6 py-3 rounded-lg
                                    bg-emerald-500 text-white
                                    font-semibold hover:bg-emerald-600
                                    transition shadow-md"
                                >
                                    Register to Course
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Courseinfo