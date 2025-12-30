import React, { useEffect, useState } from 'react'
import AdminNavbar from './../Component/AdminNavbar'
import Dashboard from '../Component/Dashboard'
import { useNavigate } from 'react-router'
import { getAllCourses, getAllVideos, deleteVideoById } from '../Services/adminServices'
import { toast } from 'react-toastify'

function AllVideos() {
    const navigate = useNavigate()
    const [selectedCourse, setSelectedCourse] = useState('All')
    const [videos, setVideos] = useState([])
    const [courses, setCourses] = useState([])

    const filteredVideos =
        selectedCourse === 'All'
            ? videos
            : videos.filter(v => v.course_id === Number(selectedCourse))

    useEffect(() => {
        loadVideos()
        loadCourses()
    }, [])

    const loadVideos = async () => {
        const token = localStorage.getItem('token')
        const result = await getAllVideos(token)
        if (result.status === 'success') {
            setVideos(result.data)
        }
    }

    const loadCourses = async () => {
        const token = localStorage.getItem('token')
        const result = await getAllCourses(token)
        if (result.status === 'success') {
            setCourses(result.data)
        }
    }

    const deleteVideo = async (video_id) => {
        const token = localStorage.getItem('token')
        const result = await deleteVideoById(token, video_id)
        if (result.status === 'success') {
            toast.success("Video purged from system successfully")
            loadVideos()
        }
        else {
            toast.error("Security lockout: Cannot delete video")
        }
    }

    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans">
            <AdminNavbar />
            <Dashboard />

            <div className="ml-72 p-12 relative overflow-hidden">
                {/* Background "Greeny" Depth */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `radial-gradient(#10b981 1.5px, transparent 1.5px)`, backgroundSize: '45px 45px' }}></div>

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* HEADER & THEMED FILTER CONTROL */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-8 px-2">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="h-[3px] w-8 bg-emerald-500 rounded-full"></span>
                                <p className="text-xs font-black text-emerald-600 uppercase tracking-[0.4em]">Media Asset Management</p>
                            </div>
                            <h2 className="text-6xl font-black text-slate-900 tracking-tighter">
                                Video <span className="text-slate-400 font-medium">Library</span>
                            </h2>
                        </div>

                        {/* --- UPDATED GREEN DROPDOWN BUTTON AREA --- */}
                        <div className="flex items-center gap-6 bg-emerald-50/80 backdrop-blur-sm p-4 rounded-[2rem] shadow-lg shadow-emerald-100/50 border border-emerald-200 min-w-[420px] transition-all hover:border-emerald-400 group">
                            <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200 group-hover:scale-105 transition-transform">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <p className="text-[10px] font-black text-emerald-700/60 uppercase tracking-[0.2em] mb-1 ml-1">Filter Archive by Course</p>
                                <div className="relative">
                                    <select
                                        value={selectedCourse}
                                        onChange={(e) => setSelectedCourse(e.target.value)}
                                        className="w-full bg-transparent text-lg font-black text-slate-800 outline-none cursor-pointer appearance-none pr-10"
                                    >
                                        <option value="All">All Registered Courses</option>
                                        {courses.map(course => (
                                            <option key={course.Course_id} value={course.Course_id}>
                                                {course.course_name}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* --- END UPDATED AREA --- */}
                    </div>

                    {/* SUMMARY STATS */}
                    <div className="mb-10">
                        <div className="inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-3 rounded-2xl shadow-2xl shadow-slate-200">
                            <span className="text-xs font-black uppercase tracking-widest opacity-60">Asset Count</span>
                            <span className="h-5 w-px bg-white/20"></span>
                            <span className="text-lg font-black">{filteredVideos.length} Master Lectures</span>
                        </div>
                    </div>

                    {/* VIDEO CONTENT LIST */}
                    <div className="space-y-6 pb-20">
                        {filteredVideos.map(video => (
                            <div
                                key={video.video_id}
                                className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(16,185,129,0.1)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col md:flex-row items-center p-6 gap-8 overflow-hidden"
                            >
                                <div className="w-24 h-24 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-600 shadow-inner group-hover:scale-110 transition-transform duration-500 border border-emerald-100">
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                </div>

                                <div className="flex-1 text-center md:text-left">
                                    <div className="flex flex-wrap items-center gap-3 mb-2 justify-center md:justify-start">
                                        <h3 className="text-2xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors tracking-tight">
                                            {video.title}
                                        </h3>
                                        <span className="px-4 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase rounded-full border border-emerald-100">
                                            {video.course_name}
                                        </span>
                                    </div>
                                    <p className="text-base font-bold text-slate-400">
                                        Content Published: {new Date(video.added_at).toLocaleDateString("en-GB", { day: '2-digit', month: 'long', year: 'numeric' })}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-3xl border border-gray-100">
                                    <button
                                        onClick={() => navigate(`/update-video/${video.video_id}`)}
                                        className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl transition-all shadow-lg shadow-emerald-100"
                                    >
                                        Modify
                                    </button>
                                    <button
                                        onClick={() => deleteVideo(video.video_id)}
                                        className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl transition-all shadow-lg shadow-red-100"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllVideos