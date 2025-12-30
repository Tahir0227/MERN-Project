import React, { useEffect, useState } from "react";
import Dashboard from "../Component/Dashboard";
import AdminNavbar from './../Component/AdminNavbar';
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addCourse } from "../Services/adminServices"

function AddCourse() {

    const navigate = useNavigate()
    const [course, setCourse] = useState({
        course_name: "",
        description: "",
        fees: "",
        start_date: "",
        end_date: "",
        video_expire_days: ""
    });

    const insertCourse = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token')
        const result = await addCourse(token, course.course_name, course.description, course.fees, course.start_date, course.end_date, course.video_expire_days)
        console.log(result)
        if (result.status == 'success') {
            toast.success('Course added successfully')
            navigate('/add-new-course')
        }
        else {
            toast.error("Failed to add course")
        }
    }

    return (
        <>
            <AdminNavbar />
            <Dashboard />
            <div
                className="min-h-screen w-full
      bg-gradient-to-br from-emerald-100 via-white to-blue-100
      flex items-center justify-center px-4"
            >
                <div className="w-full max-w-2xl">
                    <div className="bg-white rounded-3xl shadow-2xl p-8">

                        {/* Header */}
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                            Add New Course
                        </h2>

                        <form className="space-y-6">

                            {/* Course Name */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Course Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Example: MERN Full Stack Development"
                                    onChange={(e) => setCourse({ ...course, course_name: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300
                focus:ring-2 focus:ring-emerald-400 outline-none"
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Course Description
                                </label>
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Example: Learn MERN from basics to advanced"
                                    onChange={(e) => setCourse({ ...course, description: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300
                focus:ring-2 focus:ring-emerald-400 outline-none"
                                />
                            </div>

                            {/* Dates */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Start Date
                                    </label>
                                    <input
                                        type="date"
                                        name="startDate"
                                        onChange={(e) => setCourse({ ...course, start_date: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300
                  focus:ring-2 focus:ring-emerald-400 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        End Date
                                    </label>
                                    <input
                                        type="date"
                                        name="endDate"
                                        onChange={(e) => setCourse({ ...course, end_date: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300
                  focus:ring-2 focus:ring-emerald-400 outline-none"
                                    />
                                </div>
                            </div>

                            {/* Fees */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Course Fees (₹)
                                </label>
                                <input
                                    type="number"
                                    name="fees"
                                    placeholder="Example: 4999"
                                    onChange={(e) => setCourse({ ...course, fees: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300
                focus:ring-2 focus:ring-emerald-400 outline-none"
                                />
                            </div>

                            {/* Video Expiry */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Video Access Duration (Days)
                                </label>
                                <input
                                    type="number"
                                    name="expiryDays"
                                    placeholder="Example: 180"
                                    onChange={(e) => setCourse({ ...course, video_expire_days: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300
                focus:ring-2 focus:ring-emerald-400 outline-none"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                onClick={insertCourse}
                                className="w-full bg-emerald-500 hover:bg-emerald-600
              text-white font-bold py-3 rounded-xl
              shadow-md hover:shadow-lg transition"
                            >
                                Add Course
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddCourse;