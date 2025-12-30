import React, { useEffect, useState } from 'react'
import AdminNavbar from './../Component/AdminNavbar';
import Dashboard from '../Component/Dashboard'
import { getAllCourses, deleteCourseById } from '../Services/adminServices';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

function AllCourses() {
    const navigate = useNavigate()
    const [courses, setCourses] = useState([])

    useEffect(() => {
        loadCourses()
    }, [])

    const loadCourses = async () => {
        const token = localStorage.getItem('token')
        const result = await getAllCourses(token)
        if (result.status === 'success') {
            setCourses(result.data)
        }
    }

    const deleteCourse = async (Course_id) => {
        const token = localStorage.getItem('token')
        const result = await deleteCourseById(token, Course_id)
        if (result.status === 'success') {
            toast.success("Course Deleted Successfully !")
            loadCourses()
        }
        else {
            toast.error("Cannot delete this course now")
        }
    }

    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans">
            <AdminNavbar />
            <Dashboard />

            {/* MAIN CONTENT - Optimized for wide sidebar (ml-72) */}
            <div className="ml-72 p-12 relative overflow-hidden">

                {/* Visual Sophistication Background */}
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-emerald-100/40 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `radial-gradient(#10b981 1.5px, transparent 1.5px)`, backgroundSize: '50px 50px' }}></div>

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* 1. SECTION HEADER */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-8 px-2">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-[4px] w-10 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"></span>
                                <p className="text-sm font-black text-emerald-600 uppercase tracking-[0.4em]">Educational Catalog</p>
                            </div>
                            <h2 className="text-6xl font-black text-slate-900 tracking-tighter">
                                Master <span className="text-slate-400 font-medium">Courses</span>
                            </h2>
                        </div>

                        <button
                            onClick={() => navigate(`/add-course`)}
                            className="bg-slate-950 hover:bg-emerald-600 text-white px-12 py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] transition-all shadow-2xl shadow-slate-300 flex items-center gap-4 active:scale-95 group"
                        >
                            <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
                            Add New Program
                        </button>
                    </div>

                    {/* 2. COURSE LIST */}
                    <div className="space-y-8 pb-24">
                        {courses.map(course => (
                            <div
                                key={course.Course_id}
                                className="group bg-white rounded-[3.5rem] border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(16,185,129,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col md:flex-row overflow-hidden"
                            >
                                {/* Left Visual Strip */}
                                <div className="w-3 bg-emerald-500 transition-all duration-500 group-hover:w-6 group-hover:bg-emerald-400"></div>

                                <div className="flex-1 p-10 grid grid-cols-1 xl:grid-cols-12 gap-10 items-center">

                                    {/* Name & Larger Description */}
                                    <div className="xl:col-span-5">
                                        <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors tracking-tight leading-tight">
                                            {course.course_name}
                                        </h3>
                                        <p className="text-lg text-slate-400 font-semibold line-clamp-2 leading-relaxed opacity-80">
                                            {course.description || "Professional industrial certification module designed for comprehensive skill mastery."}
                                        </p>
                                    </div>

                                    {/* Tuition Fee - Large Bold UI */}
                                    <div className="xl:col-span-2 bg-emerald-50/50 p-6 rounded-[2.5rem] border border-emerald-100/50 text-center">
                                        <p className="text-[11px] font-black text-emerald-600/60 uppercase tracking-widest mb-2">Program Fee</p>
                                        <p className="text-3xl font-black text-slate-900 tracking-tighter">₹{course.fees}</p>
                                    </div>

                                    {/* Timelines */}
                                    <div className="xl:col-span-3 flex flex-col gap-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-emerald-100/50 flex items-center justify-center text-emerald-600 shadow-inner">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">Launch</p>
                                                <p className="text-base font-black text-slate-700">{new Date(course.start_date).toLocaleDateString("en-GB", { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 shadow-inner">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">Expires</p>
                                                <p className="text-base font-black text-slate-700">{new Date(course.end_date).toLocaleDateString("en-GB", { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Command Actions - SOLID COLORS */}
                                    <div className="xl:col-span-2 flex xl:flex-col gap-4 justify-end">
                                        <button
                                            onClick={() => navigate(`/update-course/${course.Course_id}`)}
                                            className="flex-1 xl:w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl transition-all shadow-lg shadow-emerald-100 active:scale-95"
                                        >
                                            Modify
                                        </button>
                                        <button
                                            onClick={() => deleteCourse(course.Course_id)}
                                            className="flex-1 xl:w-full py-4 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl transition-all shadow-lg shadow-red-100 active:scale-95"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Branding */}
                    <div className="flex justify-center items-center gap-16 opacity-30 grayscale pointer-events-none mb-10">
                        <p className="text-[12px] font-black text-slate-900 uppercase tracking-[0.8em]">Secure Inventory Management</p>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
                        <p className="text-[12px] font-black text-slate-900 uppercase tracking-[0.8em]">Real-Time Curriculum Sync</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllCourses