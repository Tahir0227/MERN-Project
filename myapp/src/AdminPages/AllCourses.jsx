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
            toast.success("Course Purged from System Successfully !")
            loadCourses()
        }
        else {
            toast.error("Security Lockout: Cannot delete this course now")
        }
    }

    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans">
            <AdminNavbar />
            <Dashboard />

            {/* MAIN CONTENT - ml-72 for standard sidebar alignment */}
            <div className="ml-72 p-12 relative overflow-hidden">

                {/* Background "Greeny" Sophistication */}
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-emerald-100/40 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `radial-gradient(#10b981 1.5px, transparent 1.5px)`, backgroundSize: '50px 50px' }}></div>

                <div className="max-w-full mx-auto relative z-10">

                    {/* 1. SECTION HEADER */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-8 px-2">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-[4px] w-10 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"></span>
                                <p className="text-sm font-black text-emerald-600 uppercase tracking-[0.4em]">Curriculum Inventory</p>
                            </div>
                            <h2 className="text-6xl font-black text-slate-900 tracking-tighter">
                                Active <span className="text-slate-400 font-medium">Courses</span>
                            </h2>
                        </div>

                        <button
                            onClick={() => navigate(`/add-course`)}
                            className="bg-slate-950 hover:bg-emerald-600 text-white px-12 py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] transition-all shadow-2xl shadow-slate-300 flex items-center gap-4 active:scale-95 group"
                        >
                            <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
                            Create New Course
                        </button>
                    </div>

                    {/* 2. SIMPLE PROFESSIONAL DATA TABLE */}
                    <div className="bg-white rounded-[3.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-950 text-white">
                                        <th className="px-10 py-8 text-[13px] font-black uppercase tracking-[0.25em] opacity-80">ID</th>
                                        <th className="px-10 py-8 text-[13px] font-black uppercase tracking-[0.25em] opacity-80">Course Name</th>
                                        <th className="px-10 py-8 text-[13px] font-black uppercase tracking-[0.25em] opacity-80">Tuition Fee</th>
                                        <th className="px-10 py-8 text-[13px] font-black uppercase tracking-[0.25em] opacity-80">Start Date</th>
                                        <th className="px-10 py-8 text-[13px] font-black uppercase tracking-[0.25em] opacity-80">Expiry Date</th>
                                        <th className="px-10 py-8 text-[13px] font-black uppercase tracking-[0.25em] opacity-80 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {courses.map((course) => (
                                        <tr key={course.Course_id} className="group hover:bg-emerald-50/40 transition-all duration-300">
                                            <td className="px-10 py-7">
                                                <span className="text-sm font-black text-slate-400 bg-slate-100 px-4 py-2 rounded-xl border border-slate-200">
                                                    #{course.Course_id}
                                                </span>
                                            </td>
                                            <td className="px-10 py-7">
                                                <p className="text-xl font-black text-slate-800 leading-tight group-hover:text-emerald-700 transition-colors tracking-tight">
                                                    {course.course_name}
                                                </p>
                                            </td>
                                            <td className="px-10 py-7">
                                                <span className="inline-flex items-center px-5 py-2.5 bg-emerald-50 text-emerald-700 text-base font-black rounded-2xl border border-emerald-100 shadow-sm">
                                                    ₹{course.fees}
                                                </span>
                                            </td>
                                            <td className="px-10 py-7">
                                                <p className="text-base font-bold text-slate-600">
                                                    {new Date(course.start_date).toLocaleDateString("en-GB", { day: '2-digit', month: 'short', year: 'numeric' })}
                                                </p>
                                            </td>
                                            <td className="px-10 py-7">
                                                <p className="text-base font-bold text-slate-400">
                                                    {new Date(course.end_date).toLocaleDateString("en-GB", { day: '2-digit', month: 'short', year: 'numeric' })}
                                                </p>
                                            </td>
                                            <td className="px-10 py-7">
                                                <div className="flex items-center justify-center gap-4">
                                                    <button
                                                        onClick={() => navigate(`/update-course/${course.Course_id}`)}
                                                        className="w-12 h-12 bg-yellow-400 hover:bg-yellow-500 text-slate-950 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-100 transition-all active:scale-90"
                                                        title="Edit Course"
                                                    >
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                                    </button>
                                                    <button
                                                        onClick={() => deleteCourse(course.Course_id)}
                                                        className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-red-100 transition-all active:scale-90"
                                                        title="Delete Course"
                                                    >
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}

                                    {courses.length === 0 && (
                                        <tr>
                                            <td colSpan="6" className="px-10 py-32 text-center">
                                                <div className="flex flex-col items-center opacity-30 grayscale scale-125">
                                                    <svg className="w-20 h-20 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                                    <p className="text-2xl font-black uppercase tracking-[0.3em]">No Courses Found</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Bottom Ticker */}
                    <div className="mt-14 flex justify-center items-center gap-12 opacity-30 grayscale pointer-events-none mb-6">
                        <p className="text-[11px] font-black text-slate-900 uppercase tracking-[0.6em]">Academic Records System</p>
                        <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                        <p className="text-[11px] font-black text-slate-900 uppercase tracking-[0.6em]">System Version 1.0.4</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllCourses