import React, { useEffect, useState } from 'react'
import AdminNavbar from './../Component/AdminNavbar'
import Dashboard from '../Component/Dashboard'

function AllVideos() {

    const [selectedCourse, setSelectedCourse] = useState('All')
    const [videos, setVideos] = useState([])

    useEffect(() => {
        // Static data (replace with API later)
        setVideos([
            {
                id: 1,
                title: 'Intro to MERN',
                course: 'IIT-MERN-2025',
                added: '10 Dec 2025'
            },
            {
                id: 2,
                title: 'React Basics',
                course: 'IIT-MERN-2025',
                added: '12 Dec 2025'
            },
            {
                id: 3,
                title: 'AI Overview',
                course: 'AI Fundamentals',
                added: '25 Nov 2025'
            },
            {
                id: 4,
                title: 'Android Setup',
                course: 'Android',
                added: '26 Nov 2025'
            }
        ])
    }, [])

    const courses = ['All', 'IIT-MERN-2025', 'AI Fundamentals', 'Android']

    const filteredVideos =
        selectedCourse === 'All'
            ? videos
            : videos.filter(v => v.course === selectedCourse)

    return (
        <>
            <AdminNavbar />
            <Dashboard />

            {/* MAIN CONTENT */}
            <div className="ml-64 min-h-screen bg-gradient-to-br from-emerald-100 via-white to-blue-100 px-6 py-10">

                {/* Header */}
                <div className="max-w-7xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-3 items-center">

                    {/* Course Filter */}
                    <div>
                        <select
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                            className="px-4 py-2 rounded-lg border
                         focus:ring-2 focus:ring-emerald-400 outline-none"
                        >
                            {courses.map(course => (
                                <option key={course} value={course}>
                                    {course === 'All' ? 'All Courses' : course}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Title (Centered) */}
                    <h2 className="text-3xl font-bold text-gray-800 text-center">
                        All Videos
                    </h2>

                    {/* Empty for alignment */}
                    <div></div>
                </div>

                {/* Video List */}
                <div className="max-w-7xl mx-auto space-y-4">

                    {filteredVideos.length === 0 && (
                        <div className="bg-white rounded-xl shadow-md p-6 text-center text-gray-500">
                            No videos found for selected course.
                        </div>
                    )}

                    {filteredVideos.map(video => (
                        <div
                            key={video.id}
                            className="bg-white rounded-xl shadow-md
                         hover:shadow-lg transition
                         flex justify-between items-center p-6"
                        >
                            {/* Info */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {video.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Course: {video.course}
                                </p>
                            </div>

                            {/* Meta */}
                            <div className="text-right">
                                <p className="text-sm text-gray-500">
                                    Added: {video.added}
                                </p>
                                <button
                                    className="mt-2 px-4 py-1.5 text-sm rounded-md
                             bg-emerald-500 text-white
                             hover:bg-emerald-600 transition"
                                >
                                    View
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default AllVideos
