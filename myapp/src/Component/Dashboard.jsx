import React, { useState } from 'react'
import { Link } from 'react-router'

function Dashboard() {
    const [openMenu, setOpenMenu] = useState(null)

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu)
    }

    return (
        <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)]
                      bg-emerald-600 text-white shadow-lg z-40">

            <div className="p-4 space-y-4">

                {/* Title */}
                <h2 className="text-lg font-bold tracking-wide">
                    Dashboard
                </h2>

                {/* Divider */}
                <hr className="border-emerald-400" />

                {/* Students */}
                <div>
                    <button
                        onClick={() => toggleMenu('students')}
                        className="w-full flex justify-between items-center
                       px-3 py-2 rounded-lg
                       hover:bg-emerald-500 transition"
                    >
                        <span> Students</span>
                        <span>{openMenu === 'students' ? '▴' : '▾'}</span>
                    </button>

                    {openMenu === 'students' && (
                        <div className="ml-6 mt-1 space-y-1 text-sm">
                            <Link
                                to="/students"
                                className="block px-2 py-1 rounded hover:bg-emerald-500"
                            >
                                Get All Students
                            </Link>
                        </div>
                    )}
                </div>

                {/* Courses */}
                <div>
                    <button
                        onClick={() => toggleMenu('courses')}
                        className="w-full flex justify-between items-center
                       px-3 py-2 rounded-lg
                       hover:bg-emerald-500 transition"
                    >
                        <span> Courses</span>
                        <span>{openMenu === 'courses' ? '▴' : '▾'}</span>
                    </button>

                    {openMenu === 'courses' && (
                        <div className="ml-6 mt-1 space-y-1 text-sm">
                            <Link
                                to="/courses"
                                className="block px-2 py-1 rounded hover:bg-emerald-500"
                            >
                                Get All Courses
                            </Link>
                            <Link
                                to="/courses/add"
                                className="block px-2 py-1 rounded hover:bg-emerald-500"
                            >
                                Add New Course
                            </Link>
                        </div>
                    )}
                </div>

                {/* Videos */}
                <div>
                    <button
                        onClick={() => toggleMenu('videos')}
                        className="w-full flex justify-between items-center
                       px-3 py-2 rounded-lg
                       hover:bg-emerald-500 transition"
                    >
                        <span> Videos</span>
                        <span>{openMenu === 'videos' ? '▴' : '▾'}</span>
                    </button>

                    {openMenu === 'videos' && (
                        <div className="ml-6 mt-1 space-y-1 text-sm">
                            <Link
                                to="/videos"
                                className="block px-2 py-1 rounded hover:bg-emerald-500"
                            >
                                Get All Videos
                            </Link>
                            <Link
                                to="/videos/add"
                                className="block px-2 py-1 rounded hover:bg-emerald-500"
                            >
                                Add New Video
                            </Link>
                        </div>
                    )}
                </div>

            </div>
        </aside>
    )
}

export default Dashboard
