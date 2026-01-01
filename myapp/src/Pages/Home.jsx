import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import { getAllActiveCourses } from '../Services/userServices'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { LoginContext } from '../App'
import DefaulltNavbar from '../Component/DefaultNavbar'

function Home() {
    const navigate = useNavigate()
    const [courses, setCourses] = useState([])
    const { loginStatus, setLoginStatus } = useContext(LoginContext)
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
        <div className="min-h-screen bg-[#f8fafc] text-gray-900 font-sans">
            {loginStatus ? <Navbar /> : <DefaulltNavbar />}

            {/* ================= HERO SECTION ================= */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-blue-600 py-24 px-6">
                {/* Decorative background circles */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

                <div className="max-w-6xl mx-auto relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-emerald-100 uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                        Empowering Future Leaders
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                        Master Skills That <span className="text-emerald-200">Matter.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-emerald-50 mb-10 leading-relaxed">
                        Join our professional training institute focused on practical learning,
                        industry-relevant skills, and your long-term career success.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => document.getElementById('aCourse').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl shadow-lg hover:bg-emerald-50 transition-all active:scale-95"
                        >
                            Explore Courses
                        </button>
                    </div>
                </div>
            </section>

            {/* ================= ACHIEVEMENTS (Floating Stats) ================= */}
            <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Years Experience", value: "10+" },
                        { label: "Students Trained", value: "5000+" },
                        { label: "Expert Trainers", value: "100+" },
                        { label: "Placement Success", value: "90%" },
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/50 text-center hover:translate-y-[-5px] transition-transform">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                                {stat.value}
                            </h3>
                            <p className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= MAIN CONTENT ================= */}
            <div className="py-24 px-6">

                {/* About Section */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Why Choose Our Institute?
                    </h2>
                    <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        We don't just teach code; we build careers. Our curriculum is designed by
                        industry experts to ensure you are ready for the modern job market from day one.
                    </p>
                </div>

                {/* ================= COURSES GRID ================= */}
                <div id="aCourse" className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
                        <div className="hidden md:block h-px flex-1 bg-gray-200 mx-8"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {courses.map(course => (
                            <div
                                key={course.Course_id}
                                className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 overflow-hidden flex flex-col"
                            >
                                {/* Course Image Container */}
                                <div className="relative overflow-hidden h-52">
                                    <img
                                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
                                        alt={course.course_name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                                        LIVE BATCH
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                                        {course.course_name}
                                    </h3>

                                    <div className="flex items-center text-gray-500 mb-8">
                                        <div className="bg-emerald-50 p-2 rounded-lg mr-3">
                                            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase font-bold text-gray-400">Start Date</p>
                                            <p className="text-sm font-semibold">
                                                {new Date(course.start_date).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "long",
                                                    year: "numeric",
                                                })}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <button
                                        className="mt-auto w-full group/btn relative inline-flex items-center justify-center px-6 py-3.5 overflow-hidden font-bold text-emerald-600 transition duration-300 border-2 border-emerald-500 rounded-xl hover:text-white"
                                        onClick={() => navigate(`/course-info/${course.Course_id}`)}
                                    >
                                        <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-full bg-emerald-500 group-hover/btn:translate-x-0 ease"></span>
                                        <span className="relative flex items-center gap-2">
                                            View Details
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Simple Premium Footer Placeholder */}
            <footer className="bg-gray-900 py-12 text-center text-gray-400 text-sm">
                <p>© 2025 Professional Training Institute. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Home