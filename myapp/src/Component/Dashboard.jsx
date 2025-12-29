import React, { useState } from 'react'
import { Link } from 'react-router'

function Dashboard() {
    const [openMenu, setOpenMenu] = useState(null)

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu)
    }

    return (
        <nav className="bg-emerald-500 shadow-sm relative z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-center items-center h-12 gap-10">

                    {/* Students */}
                    <div className="relative">
                        <button
                            onClick={() => toggleMenu('students')}
                            className="text-white font-medium hover:text-emerald-100 transition"
                        >
                            Students ▾
                        </button>

                        {openMenu === 'students' && (
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                                <Link
                                    to="/students"
                                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                    Get All Students
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Courses */}
                    <div className="relative">
                        <button
                            onClick={() => toggleMenu('courses')}
                            className="text-white font-medium hover:text-emerald-100 transition"
                        >
                            Courses ▾
                        </button>

                        {openMenu === 'courses' && (
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                                <Link
                                    to="/courses"
                                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                    Get All Courses
                                </Link>
                                <Link
                                    to="/courses/add"
                                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                    Add New Course
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Videos */}
                    <div className="relative">
                        <button
                            onClick={() => toggleMenu('videos')}
                            className="text-white font-medium hover:text-emerald-100 transition"
                        >
                            Videos ▾
                        </button>

                        {openMenu === 'videos' && (
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                                <Link
                                    to="/videos"
                                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                    Get All Videos
                                </Link>
                                <Link
                                    to="/videos/add"
                                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                    Add New Video
                                </Link>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Dashboard
