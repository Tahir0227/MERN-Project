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

    // Helper function to find course name by ID
    const getCourseName = (courseId) => {
        const course = courses.find(c => String(c.Course_id) === String(courseId));
        return course ? course.course_name : '---';
    };

    const deleteVideo = async (video_id) => {
        const token = localStorage.getItem('token')
        const result = await deleteVideoById(token, video_id)
        if (result.status === 'success') {
            toast.success("Video Deleted Successfully !")
            loadVideos()
        } else {
            toast.error("Cannot delete this video now")
        }
    }

    const filteredVideos =
        selectedCourse === 'All'
            ? videos
            : videos.filter(v => String(v.course_id) === String(selectedCourse))

    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans">
            <AdminNavbar />
            <Dashboard />

            {/* MAIN CONTENT - Fixed for wide sidebar ml-72 */}
            <div className="ml-72 p-12 relative overflow-hidden">

                {/* Background "Greeny" Accents */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `radial-gradient(#10b981 1.2px, transparent 1.2px)`, backgroundSize: '45px 45px' }}></div>

                <div className="max-w-full mx-auto relative z-10">

                    {/* 1. HEADER & THEMED FILTER */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-8 px-2">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="h-[3px] w-8 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]"></span>
                                <p className="text-xs font-black text-emerald-600 uppercase tracking-[0.4em]">Video Content Manager</p>
                            </div>
                            <h2 className="text-6xl font-black text-slate-900 tracking-tighter">
                                Video <span className="text-slate-400 font-medium">Archive</span>
                            </h2>
                        </div>

                        {/* GREEN DROPDOWN BUTTON */}
                        <div className="flex items-center gap-6 bg-emerald-50/80 backdrop-blur-sm p-4 rounded-[2.5rem] shadow-lg shadow-emerald-100/50 border border-emerald-200 min-w-[420px] transition-all hover:border-emerald-400 group">
                            <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200 group-hover:scale-105 transition-transform">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                            </div>
                            <div className="flex-grow">
                                <p className="text-[10px] font-black text-emerald-700/60 uppercase tracking-[0.2em] mb-1 ml-1">Filter by Course</p>
                                <div className="relative">
                                    <select
                                        value={selectedCourse}
                                        onChange={(e) => setSelectedCourse(e.target.value)}
                                        className="w-full bg-transparent text-lg font-black text-slate-800 outline-none cursor-pointer appearance-none pr-10"
                                    >
                                        <option value="All">All Active Courses</option>
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
                    </div>

                    {/* 2. DATA TABLE CARD */}
                    <div className="bg-white rounded-[3.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-950 text-white">
                                        <th className="px-8 py-7 text-[13px] font-black uppercase tracking-[0.25em] opacity-80">ID</th>
                                        <th className="px-8 py-7 text-[13px] font-black uppercase tracking-[0.25em] opacity-80">Course Name</th>
                                        <th className="px-8 py-7 text-[13px] font-black uppercase tracking-[0.25em] opacity-80">Title</th>
                                        <th className="px-8 py-7 text-[13px] font-black uppercase tracking-[0.25em] opacity-80">Description</th>
                                        <th className="px-8 py-7 text-[13px] font-black uppercase tracking-[0.25em] opacity-80 text-center">Reference URL</th>
                                        <th className="px-8 py-7 text-[13px] font-black uppercase tracking-[0.25em] opacity-80">Added At</th>
                                        <th className="px-8 py-7 text-[13px] font-black uppercase tracking-[0.25em] opacity-80 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredVideos.map((video) => (
                                        <tr key={video.video_id} className="group hover:bg-emerald-50/40 transition-all duration-300">
                                            <td className="px-8 py-6">
                                                <span className="text-sm font-black text-slate-400 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">#{video.video_id}</span>
                                            </td>
                                            <td className="px-8 py-6">
                                                {/* --- LARGER COURSE NAME TEXT --- */}
                                                <span className="inline-flex items-center px-5 py-2 bg-emerald-50 text-emerald-700 text-sm font-black uppercase tracking-widest rounded-2xl border border-emerald-100/50 shadow-sm">
                                                    {getCourseName(video.course_id)}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6 min-w-[200px]">
                                                <p className="text-lg font-black text-slate-800 leading-tight group-hover:text-emerald-700 transition-colors">{video.title}</p>
                                            </td>
                                            <td className="px-8 py-6 max-w-[250px]">
                                                <p className="text-base font-medium text-slate-500 line-clamp-1">{video.description}</p>
                                            </td>
                                            <td className="px-8 py-6 text-center">
                                                <a href={video.youtube_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all border border-blue-100">
                                                    Link
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                                </a>
                                            </td>
                                            <td className="px-8 py-6">
                                                <p className="text-sm font-black text-slate-400 uppercase tracking-tighter">
                                                    {new Date(video.added_at).toLocaleDateString("en-GB", { day: '2-digit', month: 'short', year: 'numeric' })}
                                                </p>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex items-center justify-center gap-3">
                                                    <button
                                                        onClick={() => navigate(`/update-video/${video.video_id}`)}
                                                        className="w-12 h-12 bg-yellow-400 hover:bg-yellow-500 text-slate-950 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-100 transition-all active:scale-90"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                                    </button>
                                                    <button
                                                        onClick={() => deleteVideo(video.video_id)}
                                                        className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-red-100 transition-all active:scale-90"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllVideos