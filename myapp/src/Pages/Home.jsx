import React from 'react'
import Navbar from '../Component/Navbar'

function Home() {

    // Temporary static data (replace with DB/API later)
    const courses = [
        { id: 1, name: 'Python', startDate: '10 Jan 2026', img: '🐍' },
        { id: 2, name: 'Java', startDate: '20 Dec 2025', img: '☕' },
        { id: 3, name: 'HTML', startDate: '01 Nov 2025', img: '📄' },
        { id: 4, name: 'CSS', startDate: '13 Dec 2025', img: '🎨' },
        { id: 5, name: 'JavaScript', startDate: '01 Oct 2025', img: '⚡' },
        { id: 6, name: 'PHP', startDate: '01 Feb 2026', img: '🌐' }
    ]

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

                {/* ================= Moving Photos ================= */}
                <div className="max-w-6xl mx-auto mb-24">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                        Our Campus & Events
                    </h2>

                    <div
                        id="instituteCarousel"
                        className="carousel slide rounded-xl shadow-lg overflow-hidden"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="https://via.placeholder.com/1200x400"
                                    className="d-block w-100"
                                    alt="Campus"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://via.placeholder.com/1200x400"
                                    className="d-block w-100"
                                    alt="Classroom"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://via.placeholder.com/1200x400"
                                    className="d-block w-100"
                                    alt="Event"
                                />
                            </div>
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
                                    <div className="text-5xl mb-4">{course.img}</div>

                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {course.name}
                                    </h3>

                                    <p className="text-sm text-gray-600 mt-2">
                                        Start Date: <span className="font-medium">{course.startDate}</span>
                                    </p>

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
