import React, { useEffect, useState } from 'react'
import AdminNavbar from './../Component/AdminNavbar';
import { getAllActiveCourses } from '../Services/userServices'
import { useNavigate } from 'react-router'
import Dashboard from '../Component/Dashboard'

function Home() {
    const navigate = useNavigate()
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
        <div className="min-h-screen bg-[#f8fafc] font-sans">
            <AdminNavbar />
            <Dashboard />

            {/* MAIN CONTENT Area */}
            <div className="ml-64 p-10 relative overflow-hidden">

                {/* Background "Greeny" Sophistication */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#10b981 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* 1. WELCOME HEADER */}
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="h-[2px] w-6 bg-emerald-500 rounded-full"></span>
                                <p className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.3em]">System Administrator</p>
                            </div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                                Console <span className="text-slate-400 font-medium">Overview</span>
                            </h1>
                            <p className="mt-2 text-slate-500 font-medium italic">Monitoring {courses.length} Active Educational Programs</p>
                        </div>

                        {/* Quick Action Stat */}

                    </div>

                    {/* 2. METRIC SUMMARY (Standard for Admin Portals) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {[

                        ].map((metric, i) => (
                            <div key={i} className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm flex items-center gap-6 group hover:border-emerald-200 transition-all">
                                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                    {metric.ico}
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{metric.label}</p>
                                    <p className={`text-2xl font-black ${metric.col}`}>{metric.val}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 3. COURSES SECTION */}
                    <div className="space-y-10">
                        <div className="flex items-center gap-4">
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase tracking-widest">Active Courses</h2>
                            <div className="h-px flex-grow bg-slate-100"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            {courses.map(course => (
                                <div
                                    key={course.Course_id}
                                    className="group bg-white rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-emerald-500 hover:shadow-[0_30px_60px_rgba(16,185,129,0.1)] transition-all duration-500 overflow-hidden flex flex-col"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-48 overflow-hidden bg-slate-100">
                                        <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                                        <img
                                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800"
                                            alt="course"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="bg-white/90 backdrop-blur-md text-emerald-600 text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg border border-emerald-100 uppercase tracking-widest">
                                                Active
                                            </span>
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl font-black text-slate-900 leading-tight mb-6 group-hover:text-emerald-600 transition-colors">
                                            {course.course_name}
                                        </h3>

                                        <div className="flex items-center gap-4 mb-8 bg-slate-50 p-4 rounded-2xl border border-gray-50">
                                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-50">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Launch Date</p>
                                                <p className="text-sm font-bold text-slate-800">
                                                    {new Date(course.start_date).toLocaleDateString("en-GB", { day: '2-digit', month: 'short', year: 'numeric' })}
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            className="mt-auto w-full bg-slate-950 hover:bg-emerald-600 text-white font-black py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-emerald-200 flex items-center justify-center gap-3 group/btn"
                                            onClick={() => navigate(`/course-info/${course.Course_id}`)}
                                        >
                                            <span className="text-[11px] uppercase tracking-widest">Control Panel</span>
                                            <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Subtle Branding Watermark */}
                <div className="mt-20 flex justify-center items-center gap-10 opacity-20 grayscale pointer-events-none">
                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em]">Institutional Management Console</p>
                </div>
            </div>
        </div>
    )
}

export default Home